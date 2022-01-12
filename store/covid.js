export const state = ()=>({
    covid:null
})

export const mutations = {
    SETCOVID(state,covid){
        state.covid = covid
    }
}

export const getters = {
    getterCovid(state){
        if(state.covid == null){
            return "alo"
        }else{
            const covid = state.covid
            return covid
        }
    }
}
 
export const actions = {
    async getCovid({commit}){
        const data = await this.$axios.$get("https://apicovidvn.herokuapp.com/api/").then(covid => (covid.result[0]))
        commit("SETCOVID",data.vietnam)
    }
}