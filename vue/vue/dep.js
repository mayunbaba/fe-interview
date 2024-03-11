export default class Dep {
  constructor() {
    if (!Dep.instance) {
      Dep.instance = this
      this.events = {}
    }
    return Dep.instance
  }

  addSub(key, sub) {
    if (!this.events[key]) {
      this.events[key] = []
    }
    this.events[key].push(sub)
  }

  notify(key, ...args) {
    if (this.events[key]) {
      this.events[key].forEach(cb => cb(...args));
    }
  }
}