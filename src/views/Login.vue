<template>
  <div class="box-login">
    <div class="box-input">
        <span>LOGIN:</span>
        <input class="input" v-model="login" type="text" placeholder="Text your username">
    </div>
    <div class="box-input">
        <span>PASSWORD:</span>
        <input class="input" v-model="password" type="text" placeholder="Text your password">
    </div>
    <div class="box-button">
      <button v-bind:class="{ 'is-loading': this.authentication }" class="button is-success" v-on:click="this.teste">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      password: null,
      login: null,
      authentication: false,
    }
  },
  methods: {
    teste() {
      this.authentication = true;
      console.log(this.password);
      console.log(this.login);
    }
  },
};
</script>

<style lang="scss">

  .box-login {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    border: 1px green dashed;
    padding: 20px;
    
    .box-input {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 5px;

      span {
        margin-right: 1px;
      }
    }

    .box-button {
      display: flex;
      justify-content: flex-end;
    }
  }

</style>