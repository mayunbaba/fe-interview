const obj3 = {
  name: 'vue3',
  version: '3.0.0',
}

let proxy = new Proxy(obj3, {
  get(target, key) {
    console.log('get', key)
    return target[key]
  },
  set(target, key, value) {
    console.log('set', key, value)
    target[key] = value
  },
})

console.log('--proxy开始--')
console.log(proxy.name) // get name vue3
proxy.version = '3.0.1' // set version 3.0.1
console.log('--proxy结束--')