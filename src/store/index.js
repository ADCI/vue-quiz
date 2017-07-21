import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import Questions from '../data/questions.json';

Vue.use(Vuex);

const getUser = store => {
  if (sessionStorage.getItem('user')) {
    const currentUser = sessionStorage.getItem('user');
    store.commit('setUser', JSON.parse(currentUser));
  }
}

export default new Vuex.Store({
  plugins: [getUser],
  state: {
    step: 0,
    user: {
      fullName: '',
      email: '',
      title: '',
      phone: '',
      industry: '',
      company: '',
    },
    endpoint: 'http://adcisolutions.com/quiz/',
    questions: Questions,
    correctAnswers: 0,
  },
  mutations: {
    nextStep(state) {
      const myState = state;
      myState.step += 1;
    },
    incrementCorrect(state) {
      const myState = state;
      myState.correctAnswers += 1;
    },
    setUser(state, user) {
      const myState = state;
      myState.user = user;
    },
    resetState(state) {
      const myState = state;
      myState.step = 0;
      myState.correctAnswers = 0;
    },
  },
  actions: {
    finish(context) {
      const results = {
        user: context.state.user,
        correct: context.state.correctAnswers,
      };
      const endpoint = context.state.endpoint;
      Axios.post(endpoint, results)
        .then(response => {
          console.log('good')
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  getters: {
    getResults(state) {
      return {
        user: state.user,
        correct: state.correctAnswers,
        all: state.questions.length,
      };
    },
    getQuestion(state) {
      return state.questions[state.step];
    },
  },
});
