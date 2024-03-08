// 事件总线
class Dep {
  constructor() {
    this.events = {};
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

const dep = new Dep();

// 订阅者1 （米粉）
dep.addSub('雷军', buy);

// 订阅者2 （米黑）
dep.addSub('雷军', notBuy);

// 发布者 （雷军）
dep.notify('雷军', '小米14发布', '预售开始了');
dep.notify('雷军', '小米su7发布', '定价确实有点贵');
console.log('米粉: 我们只是长大了，不是变富了, 买不起了, 取关了');
dep.removeSub('雷军', buy);
dep.notify('雷军', '小米su7降价了', '9.9W，预售开始了');


function buy(product) {
  console.log(`米粉：${product}, 我决定买买买`);
}

function notBuy(product, message) {
  console.log(`米黑：${product}, ${message}，工业垃圾，不买不买不买`);
}
