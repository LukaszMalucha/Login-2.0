import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID_GITHUB;
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_ID_GITHUB_SECRET;
const ROOT_URL = "https://github.com"


export default {

  retrieveGithubCode() {
    const querystring = {
      client_id: CLIENT_ID,
    };
    window.location = `${ROOT_URL}/login/oauth/authorize?${qs.stringify(querystring)}`;
  },


  retrieveGithubToken( code ) {
    const querystring = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
    };
    window.location = `${ROOT_URL}/login/oauth/access_token?${qs.stringify(querystring)}`;
  },

};
