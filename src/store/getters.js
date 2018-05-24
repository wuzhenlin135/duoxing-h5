const getters = {
  loading: state => state.app.loading,
  direction: state => state.app.direction,
  communId: state => state.app.communId,
  communTitle: state => state.app.communTitle,
  scenicId: state => state.app.scenicId,

  token: state => state.user.token,
  wxopenid: state => state.user.wxopenid,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  nickName: state => state.user.nickName
}
export default getters
