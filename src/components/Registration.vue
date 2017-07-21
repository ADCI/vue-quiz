<template lang="pug">
  .screen(
    :style = "{ 'background-image': bg }")
    //- img(:src = "bg")
    transition(name="slide" appear)
      .screen__content(v-if = 'true')
        form.screen__form
          main-title.screen__title
            | Lorem ipsum
          custom-input(type="text" name="fullname" required="true" v-model="user.fullName")
            | Full Name
          custom-input(type="text" name="title" v-model="user.title")
            | Title
          custom-input(type="email" name="email" required="true" v-model="user.email")
            | Email
          custom-input(type="phone" name="phone" v-model="user.phone")
            | Phone
          div.form__item.form__item--select
            v-select.custom-select(
              :class="{ focus: user.industry, 'is-danger': !validSelect }"
              v-model = "user.industry"
              :options = "options"
              :searchable = "false"
            )
            label(for="industry")
              | Select Industry
              sup *
          custom-input(type="text" name="company" required="true" v-model="user.company")
            | Company
          custom-button(type="button" :disabled="!isValid" @click="submit")
              | Submit
</template>

<script>
  import CustomButton from '@/components/CustomButton';
  import MainTitle from '@/components/MainTitle';
  import CustomInput from '@/components/CustomInput';
  import vSelect from 'vue-select';
  import VeeValidate from 'vee-validate';
  import Vue from 'vue';

  Vue.use(VeeValidate);

  export default {
    name: 'registration',
    data() {
      return {
        options: ['Agriculture', 'Foodservice', 'Food Manufacturing', 'Health and Media'],
        validSelect: true,
      };
    },
    components: {
      CustomButton,
      MainTitle,
      CustomInput,
      vSelect,
    },
    computed: {
      bg() {
        const url = require('../assets/1_Image-for-Widget-and-Screen-1.jpg');
        return `url(${url})`;
      },
      user() {
        return this.$store.state.user;
      },
      isValid() {
        return this.user.fullName && this.user.email && this.user.industry && this.user.company;
      },
    },
    methods: {
      submit() {
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.$store.commit('setUser', this.user);
        this.$router.push('/how-to-play');
      },
    },
  };
</script>
<style lang="scss">
  .v-select.custom-select {
    .open-indicator {
      display: none !important;
    }
    .dropdown-toggle {
      border: none;
    }
    .selected-tag {
      display: inline-block;
      background-color: transparent;
      border: none;
      color: #ffffff;
    }
    .form-control {
      padding: 10px 0;
    }
    .dropdown-menu {
      max-width: 300px;
      border-radius: 10px;
      overflow: visible;
      top: calc(100% - 5px);
      border: none;
      padding: 0;

      li {
        &:first-child {
          border-top-left-radius: 9px;
          border-top-right-radius: 9px;
          overflow: hidden;
        }
        &:last-child {
          border-bottom-left-radius: 9px;
          border-bottom-right-radius: 9px;
          overflow: hidden;
        }
        a {
          padding: 10px;
          &:hover {
            background-color: none !important;
          }
        }
      }

      li:not(:last-child) {
        border-bottom: 1px solid #e2e2e2;
      }

      &:before {
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 3px;
        top: -7px;
        transform: rotate(45deg);
        left: 50px;
        background-color: white;
        z-index: -1;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .screen {
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
  }
  .form {
    &__item {
      position: relative;

      &--select {
        margin-top: 40px;
        z-index: 2;
      }
    }
  }
  .v-select {
    position: relative;
    border: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid rgba(#ffffff, .3);
    border-radius: 0;
    outline: none;
    color: #ffffff;
    font-weight: 300;
    padding: 10px 0;
    z-index: 1;
    appearance: none;

    &:focus,
    &.focus {
      + label {
        font-size: 12px;
        trnasform: translateY(-100%);
        top: -5px;
      }
    }
  }
  
  label {
    position: absolute;
    transition: .3s;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-weight: 300;
  }
  .custom-select {
    z-index: 1;
  }
  .selected-tag {

  }
  .dropdown-toggle {
    border: none;
  }
</style>

