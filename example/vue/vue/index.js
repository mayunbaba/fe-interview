class Vue {
  constructor(options) {
    this.data = options.data;
    this.methods = options.methods;
    this.initData();
    this.initMethods();
    this.initComputed(options.computed);
    new Compile(this, options.el);
  }

  initData() {
    new Observer(this.data);
  }

  initMethods() {
    if (this.methods && typeof this.methods === 'object') {
      Object.keys(this.methods).forEach(key => {
        this[key] = this.methods[key];
      });
    }
  }

  initComputed(computed) {
    if (computed && typeof computed === 'object') {
      Object.keys(computed).forEach(key => {
        Object.defineProperty(this, key, {
          get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
          set: typeof computed[key].set === 'function' ? computed[key].set : function () {}
        });
      });
    }
  }
}
