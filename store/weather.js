export const state = () => ({
  weather: {
    temperature: '',
    city: '',
    main: ''
  }
})

export const mutations = {
  SET_WEATHER(state, value){
    state.weather.temperature = Math.ceil(value.main.temp)
    state.weather.main = value.weather[0].description.toUpperCase()
  },
}

export const getters = {
  getterWeather(state) {
    if (!state.weather) {
      return
    }else{
      const weather = state.weather
      return weather
    }
  },
}

export const actions = {
  async getWeather({ commit }) {
    const data = await this.$axios.$get('https://api.openweathermap.org/data/2.5/forecast?appid=6ee78d7f55578dff543b5c23eb6323e2&lang=vi&units=metric&q=Saigon')
    commit('SET_WEATHER', data.list[0])
  }

}