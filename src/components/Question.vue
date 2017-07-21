<template lang="pug">
  .question
    .question__content
      .question__body
        .question__text
          .question__number
            | {{ number }}
          | {{ props.text }}
      .question__answers
        label.question__label(v-for = "(item, index) in props.options")
          input.question__input(
            type = "radio"
            name = "answer"
            :value = "item"
            v-model = "answer"
            @click = "answered")
          | {{letter[index]}}. {{item}}
</template>

<script>
export default {
  props: ['props'],
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    number() {
      return this.$store.state.step + 1;
    },
    letter() {
      return ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    question() {
      return this.props;
    },
  },
  methods: {
    answered() {
      this.$emit('answered', this.answer);
    },
  },
};
</script>
<style lang="scss" scoped>
  .question {
    display: flex;
    margin: auto;
    width: calc(100% - 20px);
    max-width: 1200px;


    &__content {
      display: flex;
      margin: auto;
      align-items: stretch;
      
      @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
      }
    }

    &__body {
      position: relative;
      width: 50%;
      flex: 1 1 auto;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(3px);
      padding: 10px 15px 40px 30px;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      &:after {
        content: '';
        position: absolute;
        width: 10px;
        background: orange;
        height: 60%;
        top: 10px;
        left: 0;
      }
    }

    &__text {
      font-weight: 100;
      font-size: 24px;
      line-height: 1.75;
    }

    &__number {
      color: green;
      font-size: 36px;
      line-height: 1;
      margin-bottom: 20px;
    }

    &__answers {
      display: flex;
      width: 50%;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(green, .8);
      backdrop-filter: blur(3px);
      padding: 40px 10px;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    &__input {
      visibility: hidden;
    }

    &__label {
      padding: 15px;
      background-color: lighten(green, 10%);
      margin-bottom: 2px;
      text-transform: uppercase;
      transition: .3s;
      font-weight: 400;
      font-size: 24px;

      &:hover,
      &:focus,
      &:focus-within {
        background-color: lighten(green, 5%);
      }
    }
  }

</style>

