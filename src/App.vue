<template lang="pug">
  #app
    //- transition(name="slide-fade" mode="out-in")
    router-view
</template>
<script>
  export default {
    name: 'app',
  };
</script>
<style lang="scss">
  @import '~normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    width: 100%;
    height: 100vh;
    color: #ffffff;
  }
  .screen {
    display: flex;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    &__content {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-left: auto;
      height: 100%;
      padding: 50px 30px;
      background-color: rgba(green, .7);
      max-width: 650px;
      backdrop-filter: blur(7px);

      @media (max-width: 768px) {
        min-width: 450px;
      }

      @media (max-width: 480px) {
        width: 100%;
        min-width: 0;
      }
    }

    &__title {
      margin-left: -30px;
    }
    .slide-enter-active, .slide-leave-active {
      transition: .3s;
    }
    .slide-enter{
      opacity: 0;
      transform: translateX(100%);
    }
    .slide-fade-enter-active, .slide-fade-leave-active {
      transition: 1s;
    }
    .slide-fade-enter, .slide-fade-leave {
      opacity: 0;
      transform: scale(0.5);
    }
  }
</style>
