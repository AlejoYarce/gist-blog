<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-2">
        <button type="button" class="btn btn-lg" @click="getAll()">
          Get All
        </button>
      </div>
      <!-- <div class="col-4">
        <button type="button" class="btn btn-starred btn-lg" @click="getStarred()">
          Get Starred
        </button>
      </div> -->
      <div class="col-4 pull-right">
        <input type="text" v-model="user" v-on:keyup.enter="getByUser()" class="form-control margin-t-6" placeholder="Get By User">
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <div class="card" v-if="postList.length > 0">
          <ul class="list-group list-group-flush">
            <li>
              <div class="row">
                <div class="col-2">
                  <h3>Avatar</h3>
                </div>
                <div class="col-4">
                  <h3>Description</h3>
                </div>
                <div class="col-3">
                  <h3>Last Update</h3>
                </div>
                <div class="col-2">
                  <h3>Comments</h3>
                </div>
              </div>
            </li>
            <li class="list-group-item" v-bind:key="post.id" v-for="post in postList">
              <div class="row">
                <div class="col-2">
                  <img v-if="post.owner" v-bind:src="post.owner.avatar_url" />
                </div>
                <div class="col-4">
                  <label>{{post.description}}</label>
                </div>
                <div class="col-3">
                  <label>{{post.updated_at | formatDate}}</label>
                </div>
                <div class="col-2">
                  <label>{{post.comments}}</label>
                </div>
                <div class="col-1">
                  <button type="button" class="btn btn-lg" @click.prevent="goToDetail(post.id)">
                    <i class="fa fa-chevron-circle-right"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import store from './../../store';
import GistsService from './../../services/Gists';

export default {
  name: 'post-list',
  created() {
    GistsService.getAll();
  },
  data() {
    return {
      user: '',
    };
  },
  methods: {
    getAll() {
      this.$data.user = '';
      GistsService.getAll();
    },
    getStarred() {
      GistsService.getStarred();
    },
    getByUser() {
      if (this.$data.user) {
        GistsService.getByUser(this.$data.user);
      }
    },
    goToDetail(id) {
      this.$router.push({
        name: 'PostDetail',
        params: { postId: id },
      });
    },
  },
  computed: {
    postList() {
      return store.getters.postList;
    },
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY');
      }

      return '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

h3 {
  margin: 12px;
}

img {
  width: 80%;
  border-radius: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

i {
  font-size: 20px;
}

.btn-starred {
  background-color: #0d790d;
}

.margin-t-6 {
  margin-top: 6px;
}
</style>
