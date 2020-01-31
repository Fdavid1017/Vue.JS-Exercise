/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      firstName: 'firstName',
      secondName: 'secondName',
      password: 'password',
      email: 'email',
      profilePicture: 'profilePic'
    }
  },
  mutations: {
    setAccount(state, user) {
      console.log(user)
      state.account = user
    }
  },
  actions: {
    setAccount(context) {
      context.commit('setAccount')
    }
  },
  modules: {}
})
