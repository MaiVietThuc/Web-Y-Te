export const state = () => ({
  messAddImg: null,
  imgIDCDDV: null,
  imgBa: null
})

export const mutations = {
  SET_MESS_ADD_IMAGE(state, data) {
    state.messAddImg = data
  },

  SET_IMAGE_BY_IDCD_DV(state, data) {
    state.imgIDCDDV = data
  },

  SET_IMAGE(state, data) {
    state.imgBa = data
  }
}

export const getters = {
  getMessAddImg(state) {
    if (state.messAddImg == null) {
        return
    } else {
        return state.messAddImg
    }
  },

  getImgCDDV(state) {
    if (state.imgIDCDDV == null) {
      return ''
    } else {
        return state.imgIDCDDV
    }
  },

  getImg(state) {
    if (state.imgBa == null) {
      return ''
    } else {
        return state.imgBa
    }
  }
}

export const actions = {
  async ADD_IMAGE({ commit }, objImg) {
    if (objImg) {
      let  obj = {
        pIDCD_DV: objImg.pIDCD_DV,
        pimg: objImg.pimg.slice(22,objImg.length)
      }
      console.log(obj)
      const data = await this.$axios.$post("/api/v1/insertImg", obj)
      commit("SET_MESS_ADD_IMAGE", data)
    } else {}
  },

  async FETCH_IMAGE_BY_IDCD_DV({ commit }, objImg) {
    if (objImg) {
      let obj = {
        pIDCD_DV: objImg.pIDCD_DV
      }
      console.log(obj)
      const data = await this.$axios.$post("/api/v1/getImageByICDDV", obj)
      commit("SET_IMAGE_BY_IDCD_DV", data)
    } else {}
  },
}