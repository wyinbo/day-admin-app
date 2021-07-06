import Vue from 'vue';
import Vuex from 'vuex';
import cookie from '../utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态  false 代表不闭合 ，true代表闭合
    collapsed: false,
    // 用户信息
    user: cookie.getUserCookie(),
    // 存储菜单的路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      this.state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      this.state.user = userInfo;
    },
    loginOut() {
      this.state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeMenuRoutes(state, routes) {
      this.state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      cookie.setCookie(userInfo);
    },
    loginOut({ commit }) {
      commit('loginOut');
      cookie.removeUserCookie();
    },
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {},
});
