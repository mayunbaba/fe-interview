## eslint配置

## 禁用分号的bug
```js
created() {
  const a = 1
  [1,2,3].forEach((item) => {
    console.log(item)
  })
},
```
- 这段代码为什么会报错？
  - 查询了大量资料没有结果。

这段代码会报错，给`const a = 1;` 加上分号就好了。
- 添加分号，禁用规则解决此问题。
- js代码末尾添加分号的好处：
  - 原生js代码可以提高代码的解析速度。（红宝书中明确指出）
  - vue代码，可以增加webpack、vite打包的速度。
  - 同时避免了语义不明，浏览器无法解析问题。


```json
{
    'no-console': 'warn', // 禁止console
    'no-alert': 'warn', // 禁止alert,conirm等
    'no-debugger': 'error', // 禁止debugger
    semi: ['warn', 'never'], // 禁止分号
    'no-tabs': 'error', // 禁止使用tab
    'no-unreachable': 'error', // 当有不能执行到的代码时
    'eol-last': 'warn', // 文件末尾强制换行
    'no-new': 'error', // 禁止在使用new构造一个实例后不赋值
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 引号类型 `` "" ''
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量
    'no-unused-vars': 0,
    'no-trailing-spaces': 'warn', // 一行结束后面不要有空格
    'comma-dangle': ['warn', 'never'], // 禁止尾逗号
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // 函数定义时括号前面要不要有空格
    'no-undef': 'error', // 不能有未定义的变量,定义之前必须有var或者let
    curly: ['error', 'multi-line'], // 必须使用 if(){} 中的{}
    'generator-star-spacing': 'error', // allow async-await
    'space-in-parens': ['error', 'never'], // 禁止圆括号有空格，如Test( 2, 3 )
    'space-infix-ops': 'warn', // 在操作符旁边必须有空格， 如 a + b而不是a+b
    'space-before-blocks': ['warn', 'always'], // 语句块之前必须有空格 如 ) {}
    'spaced-comment': ['warn', 'always'], // 注释前必须有空格
    // 'arrow-body-style': ['warn', 'always'], // 要求箭头函数必须有大括号 如 a => {}
    'arrow-parens': ['warn', 'always'], // 要求箭头函数的参数必有用括弧包住，如(a) =>{}
    'arrow-spacing': ['error', { before: true, after: true }], // 定义箭头函数的箭头前后都必须有空格
    'no-const-assign': 'error', // 禁止修改const变量
    'template-curly-spacing': ['error', 'never'], // 禁止模板字符串中的{}中的变量出现空格，如以下错误`${ a }`
    'no-multi-spaces': 'warn', // 禁止多个空格，只有一个空格的地方必须只有一个
    'no-whitespace-before-property': 'error', // 禁止属性前有空格，如obj. a
    'keyword-spacing': ['warn', { before: true, after: true }], // 关键字前后必须有空格 如 } else {
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/no-mutating-props': 1,
    'no-useless-escape': 0,
    'no-irregular-whitespace': 0,
    'no-async-promise-executor': 1,
    'vue/order-in-components': 0,
    'no-case-declarations': 0,
    'use-isnan': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'no-prototype-builtins': 0,
    'no-control-regex': 0
  }
```

禁用某一行规则：// eslint-disabled-next-line