const obj3 = {
  name: 'vue3',
  version: '3.0.0',
  a: {
    b: 1
  }
}

function proxyObj(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('get', key)
      return target[key]
    },
    set(target, key, value) {
      console.log('set', key, value)
      target[key] = value
    },
  })
}

const proxy = proxyObj(obj3)

console.log('--proxy开始--')
console.log(proxy.name) // get name vue3
proxy.version = '3.0.1' // set version 3.0.1
console.log(proxy.a) // get a { b: 1 }
console.log('只能代理第一层属性，a.b无法代理')
console.log('--proxy结束--')