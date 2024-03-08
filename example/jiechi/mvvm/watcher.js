import Dep from './dep.js';


export default class Watcher {
  constructor(vm, key, cb) {
    let dep = new Dep();
    dep.addSub(key, cb);
  }
}