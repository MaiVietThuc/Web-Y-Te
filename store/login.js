export const state = () => ({
  post: null,
  doctor: {
    title: 'Bác Sỹ',
    img: '/_nuxt/assets/img/female-doctor.svg'
  },
  patient: {
    title: 'Bệnh Nhân',
    img: '/_nuxt/assets/img/1598942097_chung-s-ng-an-to-n-v-i---i-d-ch-covid-19.png'
  },
  contentNb: '',
  accountLogin: null
})

export const mutations = {
  SET_POSTS (state, value) {
    state.post = value
  },

  SET_CONTENTNB(state, value) {
    state.contentNb = value
  },

  SET_LOGIN(state, value) {
    state.accountLogin = value
  }
}

export const getters = {
  getterCovid (state) {
    if (!state.post) {
      return
    }
    const covids = state.post
    return covids
  },

  getContentLogin(state) {
    if (state.contentNb == 'doctor') {
      const doctorContent = state.doctor
      return doctorContent
    } else {
      const patientContent = state.patient
      return patientContent
    }
  },

  getAccountLogin(state) {
    let account = state.accountLogin || []
    return account
  }
}

export const actions = {

  async getPosts({ commit }) {
    const data = await this.$axios.$get('https://api.nuxtjs.dev/mountains')
    commit('SET_POSTS', data)
  },

  async contentLogin({ commit }, nub) {
    if (nub) {
      const data = nub
      console.log('debug + ', nub)
      commit('SET_CONTENTNB', data)
    } else {
    }
  },

  async login({ commit }, dataLogin) {
    if (dataLogin) {
      const data = await this.$axios.$post('/api/v1/login', dataLogin, { headers: { 'Access-Control-Allow-Origin': '*' } })
     
      console.log('debug LOGIN + ', data)
      commit('SET_LOGIN', data)
    } else {
    }
  }
}