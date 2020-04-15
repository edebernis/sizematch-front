import Vue from 'vue';
import App from './App.vue';
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, {
    props: {
        spinner: 'default',
    },
    system: {
        throttleLimit: 50,
    },
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
