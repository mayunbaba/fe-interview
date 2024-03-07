// Watcher.js
class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    Dep.target = this;
    const value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }

  update() {
    const value = this.get();
    if (value !== this.value) {
      this.value = value;
      this.cb.call(this.vm, value);
    }
  }
}
