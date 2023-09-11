const Express = require('express');
const app = new Express();
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');

const serverBundle = require('./build/vue-ssr-server-bundle.json');
const clientManifest = require('./build/client/vue-ssr-client-manifest.json');
const template = fs.readFileSync(path.join(__dirname, 'views', 'base.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  template,
  clientManifest
});

app.use(Express.static(path.resolve(__dirname, 'static')));

app.use(Express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
	const context = { url: req.url }
    
	
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.error(err);
            res.status(500).end('Internal Server Error');
        }
        // handle error...
        res.end(html)
    });
})


app.listen(8080);

