import { createApp } from './app'

export default context => {
	// since there could potentially be asynchronous route hooks or components,
	// we will be returning a Promise so that the server can wait until
	// everything is ready before rendering.
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp()
		
		// set server-side router's location
		router.push(context.url)
		
		// wait until router has resolved possible async components and hooks
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents()
			// no matched routes, reject with 404
			if (!matchedComponents.length) {
				return reject({ code: 404 })
			}
			
			Promise.all(matchedComponents.map(Component => {
	          if (Component.populateStore) {
	            return Component.populateStore({
	              store,
	              route: router.currentRoute
	            })
	          }
	        })).then(() => {
	          context.state = store.state

	          resolve(app)
	        }).catch(reject)
		}, reject)
	})
}