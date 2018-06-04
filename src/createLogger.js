// 可以触发的事件列表
const EVENTS = ['click', 'blur']

function createLogger (cb) {

  const logger = {

    inserted (el, binding) {

      let eventName = binding.arg
      let payload = binding.value

      for (let i = 0, len = EVENTS.length; i < len; i ++) {
	if (eventName === EVENTS[i]) {
	  el.addEventListener(eventName, () => {
	    cb(payload)
	  })
	  break
	}
      }
    }
  }

  logger.install = function (Vue, payload) {
    Vue.directive('log', this)
  }

  return logger
}

export default createLogger
