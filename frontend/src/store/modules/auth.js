

const state = {
  token: window.localStorage.getItem('token'),
  username: window.localStorage.getItem('username')
};

const getters = {
// Check if token exists or not
  isLoggedIn: state => !!state.token || !!state.username,
  getUsername: state => state.username,
  getToken: state => state.token,
};


const actions = {
  login: ({ commit }, token) => {
    commit('setToken', token);
    window.localStorage.setItem('token', token);
  },
  setUserInfo:  ({ commit }, username) => {
    commit('setUsername', username);
    window.localStorage.setItem('username', username);
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    commit('setUsername', null);
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
  }
};

const mutations = {
// Update token
  setToken: (state, token) => {
    state.token = token;
  },
  setUsername: (state, username) => {
    state.username = username
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}