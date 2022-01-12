export const state = () => ({
  listService: null
})

export const mutations = {
  SET_LIST_SERVICE(state, list) {
    state.listService = list
  }
}

export const getters = {
  getListService(state) {
      if (state.listService == null) {
          return
      } else {
          return state.listService
      }
  },
}

export const actions = {
  async FETCH_ALL_SERVICE({ commit }) {
    const data = await this.$axios.$get("/api/v1/getAllServices")
    console.log("DEBUGGGGGG FETCH_ALL_SERVICE", data)
    commit("SET_LIST_SERVICE", data)
  },
}