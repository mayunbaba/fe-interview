// watcher模块把compile模块与observe模块关联起来

class watcher {
  //vm:当前vue实例
  // expr：data中的数据
  // 一旦数据发送变化，就调用cb
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;

    // this表示新创建的watcher对象
    // 存储到Dep.target属性上
    Dep.target = this;

    // 需要把expr的旧值存起来
    this.oldValue = this.getVMValue(vm, expr);
    // 清空Dep.target
    Dep.target = null;
  }
  // 对外暴露的一个方法，用于更新页面
  update() {
    // 对比expr是否发生改变，如果改变则调用cb
    let oldValue = this.oldValue;
    let newValue = this.getVMValue(this.vm, this.expr);
    if (oldValue != newValue) {
      this.cb(newValue, oldValue);
    }
  }

  // 获取VM中的数据
  getVMValue(vm, expr) {
    let data = vm.$data;
    expr.split(".").forEach((key) => {
      data = data[key];
    });
    return data;
  }
}

// dep对象用于管理所有的订阅者和通知这些订阅者
class Dep {
  constructor() {
    // 用户管理订阅者
    this.subs = [];
  }
  // 添加订阅者
  addSub(watcher) {
    console.log("this.addSub", watcher);
    this.subs.push(watcher);
  }
  // 通知
  notify() {
    console.log("this.subs", this.subs);
    // 遍历所有的订阅者，调用wathcer的uodate方法
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
