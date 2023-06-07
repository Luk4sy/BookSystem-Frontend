import { createStore } from 'vuex'

export default createStore({
  state: {
    collapseFlag: false,
    currentBorrowBookData: {}
  },
  mutations: {
    toggleCollapseFlag(state) {
      state.collapseFlag = !state.collapseFlag
    },
    storeCurrentBorrowData(state, book) {
      state.currentBorrowBookData = {
        ...book
      }
    }
  }
})