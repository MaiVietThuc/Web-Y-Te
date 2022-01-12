export const state = () => ({
  chuandoan: null
})

export const mutations = {
  SET_CHUAN_DOAN(state, data) {
    state.chuandoan = data
  }
}

export const getters = {
  getChuanDoanAdd(state) {
      if (state.chuandoan == null) {
          return
      } else {
          return state.chuandoan
      }
  },
}

export const actions = {
  async ADD_CHUAN_DOAN({ commit }, objChuanDoan) {
    if (objChuanDoan) {
      let obj = {
        pIDCD_DV: objChuanDoan.idCD_DV, 
        pChanDoan: objChuanDoan.chuandoanText,
        pGhiChu: objChuanDoan.note
      }
      const data = await this.$axios.$post("/api/v1/diagnose", obj)
      console.log("DEBUGGGGGG FETCH_ALL_SERVICE", data)
      commit("SET_CHUAN_DOAN", data)
    } else {
    }
  },
}