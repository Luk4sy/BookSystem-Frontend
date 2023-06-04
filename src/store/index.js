import { createStore } from 'vuex'

export default createStore({
  state: {
    collapseFlag: false
  },
  mutations: {
    toggleCollapseFlag(state) {
      state.collapseFlag = !state.collapseFlag
    }
  }
})