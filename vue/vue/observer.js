import Dep from './dep.js'


export default class Observer {
  constructor(data) {
    this.walk(data)
    this.dep = new Dep();
  }

  // 递归劫持data中的属性
  walk(obj, expr = '__root__') {
    if (!obj || typeof obj !== 'object') {
      return
    }
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key], expr)
      this.walk(obj[key], expr + '.' + key)
    })
  }

  defineReactive(obj, key, val, expr) {
    const _this = this
    Object.defineProperty(obj, key, {
      get() {
        // console.log(obj, key, val, '获取')
        return val
      },
      set(newVal) {
        console.log(obj, expr+'.'+key, newVal, '设置值')
        val = newVal
        const subName = (expr+'.'+key).slice(9)
        _this.dep.notify(subName, newVal)
      }
    })
  }
}