export const state = () => ({
    listDoctor: null,
    signUpInfo: null,
    doctor: null

})

export const mutations = {
    SET_LIST_DOCTOR(state, list) {
        state.listDoctor = list
    },

    SET_SIGNUP(state, info) {
        state.signUpInfo = info
    },

    SET_DOCTOR_ID(state, info) {
        state.doctor = info
    }
}

export const getters = {
    getterListDoctor(state) {
        if (!state.listDoctor) {
            return
        } else {
            const listDoctor = state.listDoctor
            return listDoctor
        }
    },

    getterSignUpInfo(state) {
        const info = state.signUpInfo
        return info
    },

    getterDoctor(state) {
        const info = state.doctor
        return info
    }
}

export const actions = {
    async getAllDoctor({ commit }) {
        const data = await this.$axios.$get("/api/v1/getAllDoctor")
        commit("SET_LIST_DOCTOR", data)

    },
    async signUpDoctor({ commit }, signUpInfo) {
        if (signUpInfo) {
            const newSigupInfo = {
                username: signUpInfo.sdt,
                password: "1",
                grant: "DOCTOR",
                cusname: signUpInfo.cusname,
                sdt: signUpInfo.sdt,
                email: signUpInfo.email,
                sex: signUpInfo.sex,
                dob: signUpInfo.dob,
                quequan: signUpInfo.quequan,
            }
            console.log('debug DOCTOR + ', newSigupInfo)
            const data = await this.$axios.$post('/api/v1/register', newSigupInfo)
            commit('SET_SIGNUP', data)

        } else {
        }
    },

    async getDoctorId({commit}, infoSearch){
        if (infoSearch) {
            console.log('infoSearch - ', infoSearch)
            try {
                const data = await this.$axios.$get(`/api/v1/getDoctor/${infoSearch.ID}`) || {}
                console.log("get Patient", data)
                commit("SET_DOCTOR_ID", data)
            } catch {
                const data = null
                console.log("get Patient", data)
                commit("SET_DOCTOR_ID", data)
            }
        } else {}
    },
}