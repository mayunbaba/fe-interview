// Observer.js
class Observer {
  constructor(data) {
    this.data = data;
    this.observe(data);
  }

  observe(data) {
    if (!data || typeof data !== 'object') {
      return;
    }

    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, val) {
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify();
      }
    });

    if (typeof val === 'object') {
      this.observe(val);
    }
  }
}
