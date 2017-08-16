<template id="app">
  <div>
    <header class="text-center header-container">
      <h1>{{ msg }}</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Gist Blog',
    };
  },
};
</script>

<style>
.header-container {
  padding: 30px;
  background: #ebeff1;
  margin: 0 0 30px 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-size: 1.5em;
}

button {
  color: #fff;
  background-color: #22313F;
}
</style>
