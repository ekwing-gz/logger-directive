<template>
  <div id="app">
    <div v-log:click="clickLogMsg">点我点我</div>
    <input v-log:blur="blurLogMsg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickLogMsg: 'You click me!',
      blurLogMsg: '你离开我了！'
    }
  }
}
</script>

<style>
</style>
