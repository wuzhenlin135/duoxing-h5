import { getProfile } from '@/api'
import { getToken, setToken, removeToken, getWXOpenId, setWXOpenId, removeWXOpenId } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    wxopenid: getWXOpenId(),
    name: '',
    nickName: '',
    avatar: '',
    systemMsg: {
      consumerHotline: '',
      payMsg: '',
      slogan: ''
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_WXOPENID: (state, wxopenid) => {
      state.wxopenid = wxopenid
      setWXOpenId(wxopenid)
    },
    SET_NICK_NAME: (state, name) => {
      state.nickName = name
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_SYSMGS:(state,sysMsg)=>{
      state.systemMsg = sysMsg
    }
  },

  actions: {
    // 获取用户信息
    GetProfile({ commit, state }) {
      return new Promise((resolve, reject) => {
        getProfile(state.token).then(response => {
          const data = response.obj
          commit('SET_NAME', data.userName)
          commit('SET_NICK_NAME', data.nickName)
          commit('SET_AVATAR', data.avatar)
          commit('SET_SYSMGS',data.systemMsg)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}

export default user