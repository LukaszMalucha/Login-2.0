import apiImgur from '../../api/imgur.js';
import apiGithub from '../../api/github.js';
import qs from 'qs'
import router from '../../router.js'

const state = {
  token: window.localStorage.getItem('token'),
  username: window.localStorage.getItem('username')
};

const getters = {
// Check if token exists or not (Returns True or False with !!)
  isLoggedIn: state => !!state.token
};


const actions = {
  loginImgur: () => {
    apiImgur.loginImgur();
  },
  finalizeImgurLogin( { commit }, hash ) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    commit('setUsername', query.account_username);
    window.localStorage.setItem('token', query.access_token);
    window.localStorage.setItem('username', query.account_username);
    router.push('/');
  },
  loginGithub: () => {
    apiGithub.loginGithub();
  },
  finalizeGithubLogin( { commit }, hash ) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    commit('setUsername', query.account_username);
    window.localStorage.setItem('token', query.access_token);
    window.localStorage.setItem('username', query.account_username);
    router.push('/');
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
    state.username = username;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};