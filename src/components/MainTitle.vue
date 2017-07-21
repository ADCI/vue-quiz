<template lang="pug">
  h1.title
    slot
      | Title
      b
        | subtitle
</template>

<style lang="scss" scoped>
  .title {
    border-left: 10px solid #febf02;
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    padding-left: 15px;
    font-weight: 300;

    > b {
      display: block;
      font-weight: 700;
    }
  }
</style>

