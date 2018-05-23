const app = {
  state: {
    loading: false,      //全局loading状态
    direction: 'forward', //url前进后退  forward、reverse
    communId: ''
  },
  mutations: {
    SET_LOADING: (state, bool) => {
      state.loading = bool
    },
    SET_DIRECTION: (state, str) => {
      state.direction = str
    },
    SET_COMMUN: (state, communId) => {
      state.communId = communId
    }
  },
  actions: {
    FETCH_LOADING: ({commit, state}) => {
      return state.loading
    }
  }
}

export default app