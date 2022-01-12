export const state = () => ({
  isShow: true
})

export const mutations = {
  SET_SHOW (state, value) {
    state.isShow = value
  },
}

export const getters = {
  getterShowLoadding (state) {
    const showVal = state.isShow
    return showVal
  },
}

export const actions = {
  async showLoaddingVal({ commit }, value ) {
    if (value == false) {
      console.log("Action", value)
      commit('SET_SHOW', value)
    } else {
      console.log("Action else ", value)
      commit('SET_SHOW', true)
    }
  }
}