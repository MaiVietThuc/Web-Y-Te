export const state = () => ({
  listKind: null
})

export const mutations = {
  SET_LIST_KIND(state, value) {
    state.listKind = value
  }
}

export const getters = {
  getListKind(state) {
    let listKind = state.listKind || []
    return listKind
  }
}

export const actions = {
  async FETCH_LIST_KIND({ commit }, ) {
    const data = await this.$axios.$get('/api/v1/getAllKind', { headers: { 'Access-Control-Allow-Origin': '*' } })
    
    console.log('DEBUGS Kind - ', data)
    commit('SET_LIST_KIND', data)
  }
}