<template>
  <div class="box-login">
    <div class="box-input">
        <span>LOGIN:</span>
        <input class="input" type="text" placeholder="Text input">
    </div>
    <div class="box-input">
        <span>SENHA:</span>
        <input class="input" type="text" placeholder="Text input">
    </div>

    <button class="button">Button</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

};
</script>

<style lang="scss">

  .box-login {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    border: 1px red solid;
    padding: 20px;
    
    .box-input {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 5px;

      span {
        margin-right: 1px;
      }

      input {
        width: 250px;
      }
    }
  }

</style>