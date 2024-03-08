import Dep from './dep.js';

// 数据劫持
export default class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data, currentKey = '') {
    if (!data || typeof data !== 'object') {
      return;
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key], currentKey);
      this.walk(data[key], currentKey + '.' + key);
    })
  }

  defineReactive(obj, key, val, currentKey) {
    let dep = new Dep();
    const expr = (currentKey + '.' + key).slice(1);
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        console.log('set', expr, newVal);
        dep.notify(expr, newVal);
      }
    })
  }

}