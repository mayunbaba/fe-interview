import Compile from "./compile.js"
import Observer from "./observer.js"
export default class Vue {
  constructor(options) {
    this.$el = options.el
    this._data = options.data
    // 把data和methods中的属性代理到Vue实例上
    this.proxy(this._data)
    // 解析模板，渲染页面
    new Compile(this.$el, this)
    // 数据劫持
    new Observer(this._data)
  }

  proxy(obj) {
    Object.keys(obj).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return obj[key]
        },
        set(newVal) {
          obj[key] = newVal
        }
      })
    })
  }
}