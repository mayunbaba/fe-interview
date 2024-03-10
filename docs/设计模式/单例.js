class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;
      this.logs = [];
    }
    return Logger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log('[Lazy Logger]', message);
  }

  getLogs() {
    return this.logs;
  }
}

// 使用懒汉式单例模式创建日志记录器实例
const Logger1 = new Logger();
const Logger2 = new Logger();

Logger1.log('First log message from Lazy Logger');
Logger2.log('Second log message from Lazy Logger');

console.log(Logger1 === Logger2); // 输出 true，表示实例是同一个
console.log('All logs:', Logger1.getLogs());

class Test {
  constructor() {
    // 没有 instance属性时，创建实例
    if (!Test.instance) {
      Test.instance = this;
      this.name = 'Test';
    }
    return Test.instance;
  }
}

let test1 = new Test();
let test2 = new Test();
console.log(test1 === test2); // 输出 false，表示实例不是同一个
