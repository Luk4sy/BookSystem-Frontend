import { createStore } from 'vuex'

export default createStore({
  state: {
    collapseFlag: true
  },
  mutations: {
    toggleCollapseFlag(state) {
      state.collapseFlag = !state.collapseFlag
    }
  }
})