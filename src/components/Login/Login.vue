<template>
    <div>
        <form @submit.prevent="login(user)">
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </span>
                <input type="text" v-model.trim="user.email" class="form-control" placeholder="Email" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group">
                <span class="input-group-addon" id="basic-addon2">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </span>
                <input type="password" v-model.trim="user.password" class="form-control" placeholder="Password" aria-describedby="basic-addon2" required>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-success btn-submit">Login</button>
            </div>
        </form>
        <div>
            <strong class="loginFailedMessage"> {{message}} </strong>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {},
      message: '',
    };
  },
  methods: {
    login() {
      const dataToSend = {
        email: this.$data.user.email,
        password: this.$data.user.password,
      };
      this.$auth.login({ dataToSend }).then(() => {
        this.$router.push({
          name: 'PostList',
        });
      });
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
  font-size: 3em;
}
</style>
