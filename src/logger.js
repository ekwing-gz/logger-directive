// 可以触发的事件列表
const EVENTS = ['click', 'blur']

const logger = {

  inserted (el, binding) {

    let eventName = binding.arg
    let payload = binding.value
    if (typeof payload !== 'function') {
      console.log('Payload must be a function!')
      return
    }

    for (let i = 0, len = EVENTS.length; i < len; i ++) {
      if (eventName === EVENTS[i]) {
	el.addEventListener(eventName, payload)
	break
      }
    }
  }
}

logger.install = function (Vue, payload) {
  Vue.directive('log', this)
}

export default logger
