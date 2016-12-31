import Vue from 'vue';
import Vuex from 'vuex';

import MathSumComponent from './components/MathSumComponent.vue';
import { ModuleSum, ModuleMinus } from './stores/store.js';

// Vue use vuex to control Caculator state
Vue.use(Vuex);

// Vuex
const store = new Vuex.Store({
    modules : {
        storeSum : ModuleSum,
        storeMinus : ModuleMinus
    }
});

/*
*   Simple Calculation app :(
*/
new Vue({
    // vuex store
    store,

    el : '#vue-app',

    data : {},

    mounted () {
        console.log("mounted!!!");
    },

    components : {
        // Sum operations
        'math-sum' : MathSumComponent
    }
});
