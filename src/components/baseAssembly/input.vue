<template>
  <el-input v-model="inputValue" :placeholder="placeholder"></el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  setup(props ) {

  }
}
</script>

<style>

</style>