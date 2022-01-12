export const state = () => ({
  listChiDinh: null,
  CDService: null,
  listIDCD_DV: null
})

export const mutations = {
  SET_LIST_CHI_DINH(state, list) {
    state.listChiDinh = list
  },

  SET_CHI_DINH_SERVICE(state, data) {
    state.CDService = data
  },

  SET_IDCD_DV_PATIENT(state, data) {
    state.listIDCD_DV = data
  }
}

export const getters = {
  getterListChiDinh(state) {
      if (state.listChiDinh == null) {
          return
      } else {
          return state.listChiDinh
      }
  },

  getterCDService(state) {
    if (state.CDService == null) {
        return
    } else {
        return state.CDService
    }
  },

  GetIDCD_DV_PATIENT(state) {
    if (state.listIDCD_DV == null) {
        return {}
    } else {
        return state.listIDCD_DV
    }
  },
}

export const actions = {
  async getAllChiDinhFlowDoc({ commit }, objCD) {
    if (objCD) {
      const data = await this.$axios.$post("/api/v1/getChiDinhByDoctor", objCD)
      commit("SET_LIST_CHI_DINH", data.data)
    } else {}
  },

  async addChiDinhService({ commit }, objCDService) {
    if (objCDService) {
      const data = await this.$axios.$post("/api/v1/receivingservices", objCDService)
      console.log("DEBUGGGGGG", data)
      commit("SET_CHI_DINH_SERVICE", data)
    } else {}
  },

  async FETCH_IDCD_DV_BY_IDBN({ commit }, idPatient) {
    if (idPatient) {
      const data = await this.$axios.$get(`/api/v1/getICCDDVByPatient/${idPatient}`) || {}
      console.log("DEBUGGGGGG idcd - dv", data)
      commit("SET_IDCD_DV_PATIENT", data)
    } else {}
  },
}