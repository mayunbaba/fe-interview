import Dep from './dep.js';

// 数据劫持
export default class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    if (!data || typeof data !== 'object') {
      return;
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
      this.walk(data[key]);
    })
  }

  defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        // console.log('get', val);
        Dep.target && dep.addSub(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          return;
        }
        dep.notify();
        // console.log('setNewVal', newVal);
      }
    })
  }

}