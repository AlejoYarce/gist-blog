<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div class="post-card">
            <div class="post-card__nav">
              <ul>
                <li>
                  <button type="button" class="btn arrow-position" @click.prevent="goBack()">
                    <i class="fa fa-chevron-circle-left"></i>
                  </button>
                </li>
              </ul>
            </div>
  
            <div class="post-card__content">
              <div class="post-card__info">
                <img class="pull-right" v-if="gist.owner" v-bind:src="gist.owner.avatar_url" />
                <h1 v-if="gist.title">{{ gist.title }}</h1>
                <h1 v-else>No Title!</h1>
                <p>
                  {{ gist.description }}
                </p>
                <a href="#" v-bind:href="gist.html_url">Open Gist</a>
              </div>
  
            </div>
            <div class="post-card__img" id="post-card__img">
              <div class="post-card__social">
                <ul>
                  <li>
                    <i class="ion ion-chatbox"></i>
                    <span>Comments &nbsp;{{ gist.comments }}</span>
                  </li>
                  <li>
                    <i class="ion ion-heart"></i>
                    <span v-if="gist.forks">Forks &nbsp;{{ gist.forks.length }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from './../../store';
import GistsService from './../../services/Gists';

export default {
  name: 'detail-list',
  created() {
    GistsService.getSingle(this.$route.params.postId);
  },
  methods: {
    goBack() {
      this.$router.push({
        name: 'PostList',
      });
    },
  },
  computed: {
    gist() {
      return store.getters.gist;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat:100,300,400,700';
@import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700';
* {
  margin: 0;
  paddin: 0;
  box-sizing: border-box;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

i {
  font-size: 30px;
}

img {
  width: 20%;
  border-radius: 15px;
}

a {
  color: white;
  text-decoration: none;
}

body {
  font-family: 'Montserrat', 'Roboto', sans-serif;
  background-color: #ddd;
}

.arrow-position {
  margin: 8em auto;
}

.position-footer-card {
  position: relative;
  top: 140px;
  left: -80px;
}

.container .post-card {
  background-color: white;
  min-height: 280px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  border-radius: 0.3rem;
}

.container .post-card .post-card__nav {
  display: flex;
  border-radius: 0.3rem;
}

.container .post-card .post-card__nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 70px;
  background-color: #22313F;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}

.container .post-card .post-card__nav ul li {
  text-align: center;
  border-bottom: 2px solid rgb(27, 38, 50);
}

.container .post-card .post-card__nav ul li:last-child {
  border: none;
}

.container .post-card .post-card__nav ul li a {
  display: block;
  color: #fff;
  height: 90px;
  line-height: 90px;
  text-decoration: none;
}

.container .post-card .post-card__nav ul li:first-child a {
  border-top-left-radius: 0.3rem;
}

.container .post-card .post-card__nav ul li:last-child a {
  border-bottom-left-radius: 0.3rem;
}

.container .post-card .post-card__nav ul li a:hover:not(.active) {
  background-color: #2d3f53;
  height: 90px;
}

.active {
  background-color: #f44242;
  color: white;
}

.ion {
  font-size: 1.5rem;
}

.post-card__content {
  display: flex;
  position: relative;
  width: calc(100% - 70px);
  height: auto;
  padding: 25px;
}

.post-card__info h1 {
  display: block;
  margin: 0;
  font-size: 1.1em;
  font-weght: 100;
  color: #333;
}

.post-card__info h5 {
  display: block;
  margin-top: 0.7rem;
  font-weight: 100;
}

.post-card__info h5 span {
  color: #333;
  font-weight: 300;
}

.post-card__info p {
  margin-top: 1rem;
  color: #333;
  font-size: 0.7em;
  font-weight: 300;
  line-height: 1.3rem;
  text-align: left;
}

.post-card__info a {
  color: #f44242;
  text-decoration: none;
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.7em;
}

.post-card__info a:hover {
  text-decoration: underline;
}

.post-card__img {
  width: 100%;
  background-image: url('http://cdn.wallpapersafari.com/27/8/ML05mo.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  transition: all 1s;
}

.post-card__img .post-card__social ul {
  list-style-type: none;
  margin: 0;
  padding: 1rem 2rem;
  width: 100%;
  text-align: right;
  color: white;
}

.post-card__img .post-card__social ul li {
  display: inline-block;
  text-shadow: 0 1px rgba(0, 0, 0, 0.5);
}

.post-card__img .post-card__social ul li:first-child {
  margin-right: 2rem;
}

.post-card__img .post-card__social ul li i {
  margin-right: 0.6rem;
  transition: 0.2s all;
}

.post-card__img .post-card__social ul li a {
  transition: 0.2s all;
}

.post-card__img .post-card__social ul li a:hover>i.ion-heart {
  color: #f44242;
  transform: rotate(-15deg) scale(1.5);
}

.post-card__img .post-card__social ul li a:hover>i.ion-chatbox {
  color: #2d3f53;
  transform: rotate(-15deg) scale(1.5);
}

.post-card__img .post-card__social ul li span {
  display: inline-block;
  vertical-align: 3px;
  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-weight: 400;
}

@media (max-width: 34rem) {
  .container .post-card {
    width: 304px;
    height: 550px;
    margin: 0px;
    position: relative;
  }

  .container .post-card .post-card__nav {
    width: 100%;
  }
  .container .post-card .post-card__nav ul {
    height: 70px;
    width: 100%;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
  }
  .container .post-card .post-card__nav ul li {
    float: left;
    display: inline-block;
    border-bottom: none;
    border-right: 2px solid rgb(27, 38, 50);
  }
  .container .post-card .post-card__nav ul li a {
    height: 70px;
    max-width: 100px;
    width: 32vw;
    line-height: 80px;
    text-decoration: none;
  }
  .container .post-card .post-card__nav ul li:last-child a {
    border-radius: 0;
    border-top-right-radius: 0.3rem;
  }
  .container .post-card .post-card__nav ul li a:hover:not(.active) {
    width: 100px;
    height: 70px;
  }

  .container .post-card .post-card__content {
    position: absolute;
    top: calc(70px + 40%);
    justify-content: center;
    left: 0;
    width: 100%;
    align-items: center;
  }
  .post-card__info {
    text-align: center;
  }
  .post-card__info h1,
  .post-card__info p {
    text-align: center;
  }

  .post-card__img {
    position: absolute;
    height: 40%;
    width: 100%;
    top: 70px;
    left: 0;
    background-position: 0rem;
    border-radius: 0;
  }
}
</style>
