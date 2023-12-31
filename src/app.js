import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

// Mixins
import titleMixin from './mixins/title';

Vue.mixin(titleMixin);

Vue.mixin({
    beforeMount () {
        const { populateStore } = this.$options;
        if (populateStore) {
            this.dataPromise = populateStore({
                store: this.$store,
                route: this.$route
            })
        }
    }
});

export function createApp () {
    const router = createRouter()
    const store = createStore()
    
    sync(store, router);
    
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    
    return { app, router, store }
}