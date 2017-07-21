<template lang="pug">
  .screen(:style = "{ 'background-image': bg }")
    transition(name="fade" appear mode="out-in")
      question(
        v-if = "!answer"
        :props = "question"
        @answered = "showAnswer" )
      message(
        v-if = "answer"
        :class = "{ correct: isCorrect }"
        @nextQuestion = "showNextQuestion")
        .answer__title
          | {{ isCorrect ? "Correct!" : "Wrong!" }}
        .full-answer
          | {{question.fullAnswer}}
        .references
          .references__title
            | References: 
          ol.references__list
            li.references__item(v-for="item in question.references")
              | {{item}}
</template>
<script>
import Question from '@/components/Question';
import Message from '@/components/Message';

export default {
  name: 'Quiz',
  data() {
    return {
      answer: '',
      animate: true,
    };
  },
  mounted() {
    this.$store.commit('resetState');
  },
  computed: {
    bg() {
      const url = require('../assets/' + this.question.img + '.jpg');
      return `url(${url})`;
    },
    question() {
      return this.$store.getters.getQuestion;
    },
    step() {
      return this.$store.state.step;
    },
    questionLimit() {
      return this.$store.state.questions.length;
    },
    answerTitle() {
      return this.isCorrect() ? 'Correct' : 'wrong';
    },
    isCorrect() {
      return (this.answer === this.question.answer);
    },
  },
  methods: {
    showAnswer(answer) {
      if (answer === this.question.answer) {
        this.$store.commit('incrementCorrect');
      }
      this.answer = answer;
    },
    showNextQuestion() {
      if (this.step < this.questionLimit - 1) {
        this.answer = '';
        this.$store.commit('nextStep');
      } else {
        this.$router.push('/results');
      }
    },
  },
  components: {
    Question,
    Message,
  },
};
</script>
<style lang="scss" scoped>
  .screen {
    background-image: url('../assets/2_Image-for-Screens-2-and-3.jpg');
    background-size: cover;
  }
  .fade-enter-active, .fade-leave-active {
    transition: .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
    opacity: 0;
    transform: translateX(150px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-150px);
  }
  .opacity-enter-active, .opacity-leave-active {
    transition: .5s;
  }
  .opacity-enter, .opacity-leave-to {
    opacity: 0;
  }
  .full-answer {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 100;
  }
  .references {
    display: flex;
    color: black;

    &__title {
      display: inline-block;
      text-transform: uppercase;
      margin-right: 10px;
    }

    &__list {
      margin: 0;
      padding: 0;
      list-style-position: inside;
      font-size: 14px;
    }

    &__item {
      margin-bottom: 10px;
    }
  }
</style>
