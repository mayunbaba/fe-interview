//import Compiler from './compiler.js'

//定义一个类，用于创建vue实例
class Vue {
  constructor(options = {}) {
      this.$el = options.el
      this.$data = options.data
      this.$methods = options.methods


      // 监视data中的数据
      new Observer(this.$data)

      // 把data中所有的数据代理到了vm上
      this.proxy(this.$data)
      // 把methods中所有的方法代理到vm上
      this.proxy(this.$methods)

      if (this.$el) {
          //Compiler负责解析模板的内容
          //需要：模板和数据
          //（为啥不只传一个this，而是要分两个）
          new Compiler(this.$el, this)
      }

  }

  proxy(data) {
      Object.keys(data).forEach(key => {
          Object.defineProperty(this, key, {
              enumerable: true,
              configurable: true,
              get() {
                  return data[key]
              },
              set(newValue) {
                  if (data[key] == newValue) {
                      return
                  }
                  data[key] = newValue
              }
          })
      })
  }
}
