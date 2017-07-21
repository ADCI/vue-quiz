<template lang="pug">
  div.wrap
    input(
      v-validate="validate"
      type="text"
      :name="name"
      :required="required"
      :class="{ focus: focus, 'is-danger focus': errors.has(name), input: true }"
      :value="code"
      @input="updateCode($event.target.value)")
    label.label(:for="name")
      slot
        | Label
      sup(v-if="required") *
    span(
      v-show="errors.has(name)"
      class="help-message")
        | {{ errors.first(name) }}
</template>
<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'CustomInput',
  props: ['type', 'name', 'required', 'value'],
  computed: {
    code() {
      return this.value;
    },
    focus() {
      return !!this.code;
    },
    validate() {
      const arr = [];
      if (this.required) {
        arr.push('required');
      }
      if (this.type === 'email') {
        arr.push('email');
      }
      if (this.type === 'phone') {
        arr.push('numeric');
      }
      return arr.join('|');
    },
  },
  methods: {
    updateCode(code) {
      this.code = code;
      this.$emit('input', code);
    },
  },
};
</script>
<style lang="scss" scoped>
  
  .wrap {
    position: relative;
  }

  .input {
    position: relative;
    border: none;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid rgba(#ffffff, .3);
    outline: none;
    border-radius: 0;
    color: #ffffff;
    font-weight: 300;
    padding: 10px 0;
    z-index: 1;

    &.is-danger {
      color: orange;
      border-color: orange;
    }

    &:focus,
    &.focus {
      + .label {
        font-size: 12px;
        transform: translateY(-100%);
        top: -5px;
      }
    }
  }

  .help-message {
    position: absolute;
    font-size: 12px;
    top: 100%;
    left: 0;
    color: orange;
    margin-top: 5px;
  }

  .label {
    position: absolute;
    transition: .3s;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    font-weight: 300;
  }
</style>
