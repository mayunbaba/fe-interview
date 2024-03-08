export default class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    this.vm[this.key];
  }

  update() {
    this.cb.call(this.vm, this.vm[this.key]);
  }
}