import Vue from 'vue';
import Axios from 'axios';
import VueAuthenticate from 'vue-authenticate';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';
Axios.interceptors.response.use(response => response);
Vue.$http = Axios;

/* ============
 * Vue Authenticate
 * ============
 *
 * https://github.com/dgrubelic/vue-authenticate
 */
Vue.use(VueAuthenticate, {
  providers: {
    github: {
      clientId: '',
      redirectUri: 'http://localhost:9000/auth/callback',
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
