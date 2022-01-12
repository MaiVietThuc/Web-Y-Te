export const state = () =>({
    listPatient:null,
    patient: null,
    messPatient: null,
    messCD: null,
    messChanDoan:null,
    imgChanDoan:null
})

export const mutations = {
    SET_LIST_PATIENT(state,list){
        state.listPatient = list
    },

    SET_PATIENT_ID(state, objectPatient) {
        state.patient = objectPatient
    },

    SET_ADD_PATIENT(state, mess) {
        state.messPatient = mess
    },

    SET_PATIENT_CD(state, mess) {
        state.messCD = mess
    },
    SET_PATIENT_CHANDOAN(state, mess){
        state.messChanDoan = mess
    },
    SET_PATIENT_IMAGE(state, mess){
        state.imgChanDoan = mess
    }
}

export const getters = {
    getterListPatient(state){
        if (state.listPatient == null) {
            return "None"
          }else{
            const listPatient = state.listPatient
            return listPatient
          }
    },

    getPatientSearch(state) {
        if (state.patient) {
            return state.patient
        } else {
            return null
        }
    },

    getPatientAdd(state) {
        if (state.messPatient) {
            return state.messPatient
        } else {
            return null
        }
    },

    getPatientCD(state) {
        if (state.messCD) {
            return state.messCD
        } else {
            return null
        }
    },
    getterChanDoan(state){
        if (state.messChanDoan) {
            return state.messChanDoan
        } else {
            return null
        } 
    },
    getterPatientImage(state){
        if (state.imgChanDoan) {
            return state.imgChanDoan
        } else {
            return null
        } 
    }
}

export const actions = {
    async getAllPatient({commit}, type){
        const data = await this.$axios.$get("/api/v1/getAllPatients")
        commit("SET_LIST_PATIENT",data.data)

        if (type == "tiep-nhan") {
            return data.data
        }
    },

    async getPatientFlowId({commit}, infoSearch){
        if (infoSearch) {
            try {
                const data = await this.$axios.$get(`/api/v1/getGatient/${infoSearch.ID}`) || {}
                commit("SET_PATIENT_ID", data)
            } catch {
                const data = null
                commit("SET_PATIENT_ID", data)
            }
        } else {}
    },

    async ADD_PATIENT({commit}, patientInf){
        if (patientInf) {
            let patientUser = {
                username: patientInf.username,
                password: "1",
                grant : "PATIENT",
                cusname: patientInf.cusname,
                sdt: patientInf.sdt,
                email: patientInf.email,
                sex: patientInf.sex,
                dob: patientInf.dob,
                quequan: patientInf.quequan
              }
            const data = await this.$axios.$post("/api/v1/register", patientUser)
            commit('SET_ADD_PATIENT', data)
        } else {
        }
    },

    async ADD_PATIENT_CD({commit}, patientCD){
        if (patientCD) {
            const data = await this.$axios.$post("/api/v1/receivingpatient", patientCD)
            commit('SET_PATIENT_CD', data)
        } else {
        }
    },
    async getChanDoan({commit}, patientID){
        if(patientID){
            const info= {
                pIDCD_DV: parseInt(patientID)
            }
            const data = await this.$axios.$post("api/v1/getdiagnosebyidcddv", info)
            commit('SET_PATIENT_CHANDOAN', data.data)
        }
    },
    async getPatientImg({commit},patientID){
        if(patientID){
            const info= {
                pMSBN : patientID
            }
            console.log(info)
            const data = await this.$axios.$post("api/v1/getInfoDisanoseById", info)
            console.log("image", data)
            commit('SET_PATIENT_IMAGE', data.data)
        }
    },
    async updatePatientStatus({commit},patientID){
        if(patientID){
            const info= {
                pIDCD : patientID.pIDCD,
                pMSBN : patientID.pMSBN,
                pIDBS : patientID.pIDBS,
                pIDPK : patientID.pIDPK,
                pTT : patientID.pTT
            }
            console.log(info)
            const data = await this.$axios.$post("/api/v1/updateIDChiDinh", info)
            console.log("status mess", data)
        }
    }
}