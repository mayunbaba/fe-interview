/*
 observer用于给data中所有的数据添加getter，setter
 */
class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data);
  }

  //核心方法
  // 遍历data中所有的数据，都添加getter和setter
  walk(data) {
    if (!data || typeof data != "object") {
      return;
    }
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
      this.walk(data[key]);
    });
  }
  // 定义响应式的数据(数据劫持)
  defineReactive(obj, key, value) {
    let that = this;
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        // 如果Dep.target中有watcher对象，则存储到订阅者数组中
        // 注意这里的 Dep和dep
        Dep.target && dep.addSub(Dep.target);
        console.log("获取了", key, Dep.target);
        return value;
      },
      set(newValue) {
        if (value === newValue) {
          return;
        }
        value = newValue;
        dep.notify();
        // 如果newValue是一个对象，则继续劫持
        that.walk(newValue);
      },
    });
  }
}
