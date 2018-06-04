import Vue from 'vue'
import App from './App'
import logger from './logger'

Vue.use(logger)

new Vue({
  el: '#app',
  render: h => h(App)
})
