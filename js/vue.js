import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import CountriesList from './components/CountriesList.vue';

Vue.use(Vuex);

const store = require('./store/index').default;

new Vue({
    el: '#app',
    store,
    components: {
        CountriesList
    }
});
