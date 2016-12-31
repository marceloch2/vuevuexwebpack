<template>
    <div>
        <another-one></another-one>
        <hr>
        <input type="number" v-model="nrone" placeholder="Number one">
        <input type="number" v-model="nrtwo" placeholder="Number two">

        result : <span v-text="getResult"></span>

        <hr>
        <button
        type="button"
        name="button"
        @click="doTheSum">Sum</button>

        <button
        type="button"
        name="button"
        @click="sumOneMoreTime">Sum same value one more time</button>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import AnotherONe from "./AnotherComponent.vue";

export default {
    data () {
        return {
            nrone : 0,
            nrtwo : 0
        }
    },

    created () {},
    mounted () {},

    computed : mapState({
        getResult () {
            return this.$store.state.storeSum.result;
        }
    }),

    methods : {
        doTheSum() {
            this.$store.dispatch('sum', {
                'one' : this.nrone,
                'two' : this.nrtwo
            });
        },

        sumOneMoreTime () {
            this.$store.getters.sumAgainWithResult;
        }
    },

    components : {
        'another-one' : AnotherONe
    }

}
</script>
