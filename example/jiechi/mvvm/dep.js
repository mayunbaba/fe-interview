// 事件总线
export default class Dep {
  constructor() {
    // 懒汉式单例模式
    if (!this.instance) {
      this.instance = this;
      this.subs = [];
    }
    
    return this.instance;
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => {
      console.log('sub', sub);
      sub.update();
    })
  }
}