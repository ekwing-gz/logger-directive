# Vue日志指令

> 触发指定事件，调用payload回调

## Usage

```
// main.js
import Vue from 'vue'
import logger from 'logger'

Vue.use(logger)

// component
<test v-log:click="payload"></test>
```
