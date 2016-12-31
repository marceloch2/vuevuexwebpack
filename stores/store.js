const ModuleSum = {
    state     : {
        result : 0
    },
    actions   : {
        sum ({ commit }, nrs) {
            commit('sum', nrs);
        }
    },
    getters   : {
        sumAgainWithResult (state) {
            return state.result = state.result + state.result;
        }
    },
    mutations : {
        sum (state, nrs) {
            state.result = nrs.one + nrs.two;
        }
    },
}

const ModuleMinus = {
    state     : {},
    actions   : {},
    getters   : {},
    mutations : {},
}

export { ModuleSum, ModuleMinus };
