# vuex

```js
import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './modules/module1'
import module2 from './modules/module2'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    module1,
    module2
  }
})

export default store
```

```js
// module1.js
const module1 = {
  state: {
    // 模块1的状态
  },
  mutations: {
    // 模块1的 mutations
  },
  actions: {
    // 模块1的 actions
  },
  getters: {
    // 模块1的 getters
  }
}

export default module1

```

- 组件中使用Modules
```js
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    // 访问模块1的 state
    ...mapState('module1', ['someState']),

    // 访问模块1的 getters
    ...mapGetters('module1', ['someGetter'])
  },
  methods: {
    // 触发模块1的 mutation
    ...mapMutations('module1', ['mutationType']),

    // 触发模块1的 action
    ...mapActions('module1', ['actionType'])
  }
}

```

## 核心概念
- state
- mutation
- action
- getters
- modules

## vuex和vue通信
- 组件使用getters获取状态
1. 组件派发action（异步）、mutation（同步）
2. 修改state
3. state变化反映在视图上
