import { getCommunInfo } from '@/api'

const app = {
  state: {
    loading: false,      //全局loading状态
    direction: 'forward', //url前进后退  forward、reverse
    communId: '',
    communTitle: '',
    scenicId: ''
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
    },
    SET_COMMUN_TITLE: (state, communTitle) => {
      state.communTitle = communTitle
    },
    SET_SCENIC: (state, scenicId) => {
      state.scenicId = scenicId
    }
  },

  actions: {
    GetCommunInfo: ({commit, state}, communId) => {
      commit('SET_COMMUN', communId)
      return new Promise((resolve, reject) => {
        getCommunInfo(communId).then(response => {
          const data = response.obj
          commit('SET_COMMUN_TITLE', data.title)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app