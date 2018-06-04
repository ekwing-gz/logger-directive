# Vue日志指令生成器

> 触发指定事件，调用绑定的回调处理函数

## Usage

```
// main.js
import Vue from 'vue'
import createLogger from 'createLogger'

let logger = createLogger(function (payload) {
  // do something with payload
})

Vue.use(logger)

// component
<test v-log:click="payload"></test>
```
