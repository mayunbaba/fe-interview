# js基础

## 值类型和引用类型

1. **8种类型**
Undefined、Null、Boolean、Number、String、Symbol(es6)、BigInt(es11)、Object

2. **3种引用类型**
Object、Array、Function

## ！！！数据类型检测的方式
#### 1.typeof
```js
typeof "Hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol("foo"); // "symbol"
typeof {}; // "object"
typeof []; // "object"
typeof null; // "object"
typeof function () {}; // "function"
```
#### 2.instanceof
instanceof 用于检测一个对象是否是某个构造函数的实例，只可以判断引用类型
```js
2 instanceof Number // false
true instanceof Boolean // false

[] instanceof Array // true
console.log(function a() {} instanceof Function) // true
console.log({} instanceof Object) // true
console.log([] instanceof Object) // true
```

```js
Array.isArray([]);
```

#### 3.Object.prototype.toString.call() 最准确的方式
```js
const a = Object.prototype.toString;

a.call(2); // '[object Number]'
a.call('str'); // '[object String]'
a.call(true) // '[object Boolean]'
a.call(null) // '[object Null]'
a.call(undefined) // '[object Undefined]'
a.call(Symbol(3)) // '[object Symbol]'
a.call([]) // '[object Array]'
a.call({}) // '[object Object]'
a.call(function test() {}) // '[object Function]'
```

#### 判断空数据

```js
Array.isArray(arr) && arr.length === 0;
```

#### 判断一个对象是空对象

```js
Object.keys(obj).length === 0;
Object.entries(obj).length === 0;
JSON.stringify(obj) === "{}";
```

## null和undefined区别
- null 空对象 typeof null === 'object',历史遗留问题。
- undefined 未定义

## Object.is() 和 === 区别 (===更好用)
使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和+0 不再相等，两个NaN是相等的。
```js
console.log(Object.is(5, 5)); // true
console.log(Object.is('hello', 'hello')); // true
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false，不是严格相等，因为+0和-0在比较上是不一样的
console.log(Object.is({}, {})); // false，不是严格相等，因为对象是引用类型，即使内容一样，也是不同的对象
```

## ！！！深拷贝和浅拷贝

当你进行浅拷贝时，你复制的是原始数据结构中的引用，而不是实际的值。这意味着修改拷贝后的数据可能会影响原始数据。而深拷贝则是创建一个全新的数据结构，并复制其中的所有值，这样修改拷贝后的数据不会影响原始数据。

- **深拷贝** JSON.parse(JSON.stringify(obj)) Function 会丢失，可以使用 lodash
- **浅拷贝** Object.assign({}, obj)

## split 和 join 区别

```js
'str'.split('') // ['s', 't', 'r']
[1,2,3].join('-') // 1-2-3
```

## 数组的常用方法有哪些
1. push
2. pop
3. shift
4. unshift
5. splice
6. slice
7. concat
8. join
9. indexOf
10. lastIndexOf
11. includes
12. forEach
13. map
14. filter
15. reduce
16. find
17. findIndex
18. some
19. every
20. sort
21. reverse
    
#### slice和splice区别

## hasOwnProperty
判断对象是否存在某属性

## ！！！防抖和节流
|   |出发时间|使用场景|
|--|--|--|
|防抖|结果，最后执行一次|输入框tab提示|
|节流|过程，固定频率执行|拖动图片|

## ！！！call和apply区别
用于调用函数并指定函数执行时的上下文（即 this 值），以及传递参数。

::: info
code
<script setup>
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

function greet() {
    console.log('Hello, ' + this.name);
}

greet.call(obj1); // 输出：Hello, Alice
greet.apply(obj2); // 输出：Hello, Bob
</script>
:::


