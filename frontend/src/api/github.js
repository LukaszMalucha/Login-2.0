import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID_GITHUB;
const ROOT_URL = "https://github.com"


export default {
  loginGithub() {
    const querystring = {
      client_id: CLIENT_ID,
    };
    window.location = `${ROOT_URL}/login/oauth/authorize?${qs.stringify(querystring)}`;

  },
};
