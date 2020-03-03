<template>
  <div class="position-box">
    <div class="box-login">
        <span class="login">LOGIN:</span>
        <input class="input login-input" v-model="login" type="text" placeholder="Text your username">
        <span class="password">PASSWORD:</span>
        <input class="input password-input" v-model="password" type="password" placeholder="Text your password">
        <span class="error-login" v-if="errorLogin">{{ errorLogin }}</span>
        <button v-bind:class="{ 'is-loading': this.authentication }" class="button is-success box-button" v-on:click="this.loginSubmit">Confirm</button>
    </div>
  </div>
</template>

<script>
import axios from '../axios/index';

export default {
  name: 'Login',
  data() {
    return {
      password: null,
      login: null,
      authentication: false,
      errorLogin: null,
    }
  },
  methods: {
    loginSubmit() {
      this.authentication = true;
      axios.post('/login', {username: this.login, password: this.password })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push('home');
          }
        })
        .catch((response) => {
          this.errorLogin = 'Login and/or Password are wrong';
          this.authentication = false;
        });
    }
  },
};
</script>

<style lang="scss">
.position-box {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;

    .box-login {
      width: 50%;
      border: 1px solid green;
      padding: 10px;
      display: grid;
      justify-self: center;
      align-self: center;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 15px;
      grid-template-areas:
      "login login-input login-input login-input"
      "password password-input password-input password-input"
      "error error . box-button";

      .login-input {
        display: grid;
        justify-self: end;
        grid-area: login-input;
      }

      .password-input {
        display: grid;
        justify-self: end;
        grid-area: password-input;
      }

      span {
        .login {
          grid-area: login;
        }

        .password {
          grid-area: password;
        }
      }

      .error-login {
        grid-area: error;
        color: red;
        font-size: 12px;
      }

      .box-button {
        grid-area: box-button;
      }
    }
  }


</style>
