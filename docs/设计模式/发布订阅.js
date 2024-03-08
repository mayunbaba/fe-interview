class EventBus {
  constructor() {
    this.events = {};
  }
  $on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  $emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  }
  $off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

const eventBus = new EventBus();

// 订阅者1 （米粉）
eventBus.$on('雷军', (product, message) => {
  console.log(`雷军：${product} ${message} 买买买`);
});

// 订阅者2 （米黑）
eventBus.$on('雷军', (product, message) => {
  console.log(`雷军：${product} ${message} 组装厂`);
});

// 发布者 （雷军）
eventBus.$emit('雷军', '小米14发布', '预售开始了');
eventBus.$emit('雷军', '小米su7发布', '我们很贵');