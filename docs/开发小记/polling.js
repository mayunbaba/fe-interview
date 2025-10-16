/**
 * 已实现功能：
 * 可通过interval设置轮询间隔时间
 * 可通过start()和stop()方法控制轮询的开始和停止
 * 可通过backendReq设置是否后台请求，默认为false
 * 页面置于后台时，即：用户看不到的时候，停止轮询。页面重新激活时，重新开始轮询。减轻服务器压力。
 * 轮询请求时间间隔 = 接口请求时间 + 轮询间隔时间。即：返回数据返回后，间隔时间开始计时。服务器压力大的时候，降低服务器压力。
 */

/**
 * 轮询
 * @param {Function} getData 获取数据的方法
 * @param {Number} interval 轮询间隔
 * @param {Boolean} backendReq 是否后端请求，默认为true
 * @example
 * const polling = new Polling({
 *  getData: () => {}
 *  interval: 5000,
 *  backendReq: true
 * });
 * polling.start();
 * polling.stop();
 * 离开页面时，需要手动调用stop()方法，否则页面关闭时，轮询会一直进行
 */
export default class Polling {
  constructor({ getData, interval, backendReq = false }) {
    this.polling = null;
    this.timer = null;
    this.getData = getData;
    this.interval = interval;
    this.backendReq = backendReq;
    this.visibilityChangeHandler = () => this.onPageVisibilityChange();
    !backendReq && document.addEventListener('visibilitychange', this.visibilityChangeHandler);
  }

  start() {
    this.polling = true;
    this.poll();
  }

  stop() {
    this.polling = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  destroy() {
    this.stop();
    !this.backendReq && document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
  }

  poll() {
    if (this.polling) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.log('polling', new Date().toLocaleString(), this.getData);
      this.getData().then(() => {
        if (!this.polling) return;
        this.timer = setTimeout(() => {
          this.poll();
        }, this.interval);
      });
    }
  }

  // 页面置于后台时，停止轮询，页面重新激活时，重新开始轮询
  onPageVisibilityChange() {
    if (document.hidden) {
      this.stop();
    } else {
      this.start();
    }
  }

  log(...args) {
    console.log(...args);
  }
}
