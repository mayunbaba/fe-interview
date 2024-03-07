class Watcher {
  constructor(data, key, cb) {
    this.cb = cb;
    this.key = key;
    this.value = data[key];
    Dep.target = this;
    data[key];
    Dep.target = null;
  }

  update() {
    this.value = this.cb();
  }
}