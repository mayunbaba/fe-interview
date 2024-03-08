import Compile from './compile.js';
import Observer from './observer.js';

export default class MVVM {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options.methods;
    this.$options = options;
    
    new Observer(this.$data);

    new Compile(this.$el, this);

    this.proxy(this.$data);
    this.proxy(this.$methods);
  }
  // 代理data,使得可以通过this.xxx访问data中的数据
  proxy(obj) {
    Object.keys(obj).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return obj[key];
        },
        set(newVal) {
          obj[key] = newVal;
        }
      })
    })
  }
}