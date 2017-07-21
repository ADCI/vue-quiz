<template lang="pug">
  button(@click="$emit('click')")
    slot
      | Submit
</template>
<style lang="scss" scoped>
  button {
    background: #28632d;
    border: none;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    text-align: center;
    transition: .3s;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: darken(#28632d, 5%);
    }

    &:disabled {
      background: #b5b5b5;
    }

  }
</style>

