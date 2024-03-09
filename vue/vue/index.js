export default class Vue {
  constructor(options) {
    this.$el = options.el
    this._data = options.data
    // 把data和methods中的属性代理到Vue实例上
    // 解析模板，渲染页面
  }
}