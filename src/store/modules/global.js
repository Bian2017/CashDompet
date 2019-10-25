const globalData = {
  namespaced: true,
  state: {
    tabBarSelected: 'Pinjaman' //默认选中的底部tabbar
  },
  mutations: {
    setTabBarSelected(state, value) {
      state.tabBarSelected = value
    }
  }
}

export default globalData
