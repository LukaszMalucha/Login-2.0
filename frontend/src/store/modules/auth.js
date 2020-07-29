

const state = {
  token: window.localStorage.getItem('token'),
  username: window.localStorage.getItem('username'),
  error: null
};

const getters = {
// Check if token exists or not
  isLoggedIn: state => !!state.token || !!state.username,
  getUsername: state => state.username,
  getToken: state => state.token,
  getError: state => state.error,
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
  },
  authError: ({ commit }, error) => {
      commit('setError', error);
      document.getElementById("alert").style.display = "block";
      setTimeout(() => document.getElementById("alert").style.display = "none", 5000);

  }
};

const mutations = {
// Update token
  setToken: (state, token) => {
    state.token = token;
  },
  setUsername: (state, username) => {
    state.username = username
  },
  setError: (state, error) => {
    state.error = error
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}