import Vue from 'vue';
import Router from 'vue-router';
// import Login from '@/components/Login/Login';
import PostList from '@/components/PostList/List';
import PostDetail from '@/components/PostDetail/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList,
    },
    {
      path: '/:postId',
      name: 'PostDetail',
      component: PostDetail,
    },
  ],
});
