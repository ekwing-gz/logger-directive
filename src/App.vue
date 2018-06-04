<template>
  <div id="app">
    <div v-log:click="handleClick">点我点我</div>
    <input v-log:blur="handleBlur">
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('You click me!')
    },
    handleBlur () {
      alert('你离开我了!')
    }
  }
}
</script>

<style>
</style>
