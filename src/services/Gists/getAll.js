import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (posts) => {
  store.dispatch('GET_POSTS', posts);
};

// When the request fails
const failed = () => {
  store.dispatch('GET_POSTS_FAILED');
};

export default () => {
  Vue.$http.get('/gists/public')
  .then((response) => {
    if (response && response.status === 200) {
      success(response.data);
    } else {
      failed();
    }
  })
  .catch(() => {
    failed();
  });
};
