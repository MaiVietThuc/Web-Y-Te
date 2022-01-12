export const state = () => ({
  listRoom: null
})

export const mutations = {
  SET_LIST_ROOM(state, value) {
    state.listRoom = value
  }
}

export const getters = {
  getListRoom(state) {
    let listRoom = state.listRoom || []
    return listRoom
  }
}

export const actions = {
  async FETCH_LIST_ROOM({ commit }, ) {
    const data = await this.$axios.$get('/api/v1/getAllRoom', { headers: { 'Access-Control-Allow-Origin': '*' } })
    
    console.log('DEBUGS ROOM- ', data)
    commit('SET_LIST_ROOM', data)
  }
}