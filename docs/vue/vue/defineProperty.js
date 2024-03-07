const obj = {}

// 是否可以修改、是否可以枚举、是否可以删除
Object.defineProperty(obj, 'name', {
  get() {
    console.log('get')
    return 'zhangsan'
  },
  set(value) {
    console.log('set', value)
  },
})

console.log(obj.name) // zhangsan
obj.name = 'lisi' // set lisi

// 数据劫持函数
function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key, value)
      return value
    },
    set(newValue) {
      console.log('set', key, newValue)
      value = newValue
    },
  })
}

const obj2 = {
  name: 'LWH',
  age: 18,
}
defineReactive(obj2, 'name', obj2.name)
defineReactive(obj2, 'age', obj2.age)

console.log('--劫持数据开始--')
obj2.name // get name LWH
obj2.name = 'lwh' // set name lwh
obj2.age // get age 18
console.log('--劫持数据结束--')
