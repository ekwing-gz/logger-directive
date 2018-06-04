import Vue from 'vue'
import App from './App'
import createLogger from './createLogger'

let logger = createLogger(function (payload) {
  alert(payload)
})

Vue.use(logger)

new Vue({
  el: '#app',
  render: h => h(App)
})
