import { createStore } from 'vuex'
export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER ( state, user){
      state.user = user
    },

    CLEAR_USER ( state, user){
      state.user = user
    }
  },
  actions: {
    // async login({commit}, details){

    // },
    // async signUp({commit}, details){
      
    // },
    // async logout({commit}){
      
    // }
  }, 
})
