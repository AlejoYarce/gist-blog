import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (posts) => {
  store.dispatch('GET_POST_DETAILS', posts);
};

// When the request fails
const failed = () => {
  store.dispatch('GET_POST_DETAILS_FAILED');
};

export default (postId) => {
  Vue.$http.get(`/gists/${postId}`)
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
