export const state = () =>({
  patient: {
    username: null,
    password: null
  }
})

export const mutations = {
  SET_USERNAME(state,value){
    state.patient.username = value.username
  },

  SET_PASSWORD(state,value){
    state.patient.password = value.password
  }
}

export const getters = {
  getPatient(state) {
    if (!state.patient) {
      return
    }else{
      const patient = state.patient
      return patient
    }
  },
}

export const actions = {
  async FETCH_USERNAME({commit}){
    const data = await this.$axios.$get("/api/v1/getUsername")
    console.log('username', data)
    commit("SET_USERNAME", data)
  },

  async FETCH_PASSWORD({commit}){
    const data = await this.$axios.$get("/api/v1/getPassword")
    console.log('password', data)
    commit("SET_PASSWORD", data)
  }
}