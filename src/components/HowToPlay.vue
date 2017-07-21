<template lang="pug">
  .screen(:style = "{ 'background-image': bg }")
    transition(name = "slide" appear)
      .screen__rules
        main-title.screen__title
          | {{ title }}
          b
            | {{ secondTitle }}
        h3.list-title
          | {{ listTitle }}
        ol.rules__list
          li.rules__item(v-for="item in list")
            | {{ item }}
        custom-button.rules__button(@click="start")
          | Start
</template>
<script>
import MainTitle from '@/components/MainTitle';
import CustomButton from '@/components/CustomButton';

export default {
  data() {
    return {
      title: 'Quiz',
      secondTitle: 'Application',
      listTitle: 'How to Play?',
      list: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipisicing elit. Dolor dolorum',
        'atque delectus perferendis',
      ],
    };
  },
  computed: {
    bg() {
      const url = require('../assets/img.jpg');
      return `url(${url})`;
    },
  },
  methods: {
    start() {
      this.$router.push('/quiz');
    },
  },
  components: {
    MainTitle,
    CustomButton,
  },
};
</script>
<style lang="scss" scoped>
  .screen {
    background-size: cover;

    &__rules {
      width: 50%;
      margin-left: auto;
      margin-top: auto;
      margin-bottom: auto;
      background: rgba(0,0,0, .6);
      padding: 30px;
      color: #ffffff;
    }
  }
  .list-title {
    text-transform: uppercase;
    font-weight: 300;
    color: #febf02;
    margin-bottom: 30px;
  }
  .rules {
    &__list{
      margin: 0;
      padding: 0;
      margin-bottom: 30px;
      list-style: none;
      counter-reset: item;
    }

    &__item {
      margin-bottom: 25px;
      font-weight: 300;
      color: #ffffff;
      font-size: 14px;

      &:before {
        content: counter(item);
        counter-increment: item;
        color: #febf02;
        font-size: 18px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }

    &__button {
      background-color: green;

      &:hover,
      &:focus {
        background-color: darken( green , 5%);
      }
    }
  }
</style>
