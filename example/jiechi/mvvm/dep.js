export default class Dep {
  constructor() {
    // 懒汉式单例模式
    if (!Dep.instance) {
      Dep.instance = this;
      this.events = {};
    }
    return Dep.instance
  }
  addSub(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  notify(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  }
  removeSub(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}