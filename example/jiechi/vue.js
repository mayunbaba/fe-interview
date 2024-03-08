// 创建一个递归代理函数，用于代理整个数据对象
function createProxy(data, updateCallback) {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  return new Proxy(data, {
    get(target, key) {
      return createProxy(target[key], updateCallback);
    },
    set(target, key, value) {
      target[key] = value;
      // 触发更新回调
      updateCallback();
      return true;
    },
  });
}

class Vue {
  constructor(options) {
    this.$data = options.data;
    this.$methods = options.methods;
    this.render = options.render;
    this.$el = document.querySelector(options.el);
    this.proxyData();

    // 把methods中的方法代理到Vue实例上
    this.proxyMethods();

    // 初始化视图
    this.render.call(this.$data);
  }

  proxyData() {
    // 使用Proxy代理data对象
    this.$data = createProxy(this.$data, () => {
      this.render.call(this.$data);
    });
  }

  proxyMethods() {
    Object.keys(this.$methods).forEach(key => {
      this[key] = this.$methods[key].bind(this.$data);
    });
  }
}
