import axios from 'axios'

const state = {
  personList: [],
  familylist: []
}

const mutations = {
  personList: (state, personList) => {
    state.personList = personList
  },
  familyList: (state, familyList) => {
    state.familyList = familyList
  }
}

const actions = {
  async getPersonList ({commit}) {
    return axios.get(`http://localhost:8081/persons`)
      .then(response => {
        commit('personList', response.data)
      })
  },
  async getFamily ({commit}, lastname) {
    return axios.get('http://localhost:8081/persons/lastname/' + lastname)
      .then(response => {
        commit('familyList', response.data)
      })
  },
  async AddPerson ({commit}, name) {
    return axios.get('http://localhost:8081/persons/create?firstname=' + name[0] + '&lastname=' + name[1])
      .then(response => {
        console.log('nom ' + name[1] + 'prenom ' + name[0])
        commit('personList', response.data)
      })
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions
}
