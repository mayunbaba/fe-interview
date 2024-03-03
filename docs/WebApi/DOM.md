# DOM

## 什么是事件冒泡和事件捕获？

事件冒泡是指事件从内层元素向外层元素传播的过程，

而事件捕获则是相反的，即从外层元素向内层元素传播的过程。

## 如何阻止事件冒泡
`event.stopPropagation`

## 事件代理和事件委托
同一个概念的不同叫法，利用事件冒泡机制，将事件监听器绑定到父节点。

## DOM系性优化的方法
1. 避免频繁的重绘和回流：修改样式时，尽量一次性修改，避免多次重绘和回流。
2. 减少 DOM 操作次数：合并多个操作，避免频繁的增删改查。
3. 使用事件委托
4. 缓存查询结果
5. 使用文档片段
```js
// 创建文档片段
const fragment = document.createDocumentFragment();

// 添加多个节点到文档片段
const p1 = document.createElement('p');
p1.textContent = 'Hello, ';
fragment.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'world!';
fragment.appendChild(p2);

// 插入文档片段到页面中
const container = document.getElementById('my-container'); // 假设有一个 id 为 "my-container" 的容器
container.appendChild(fragment);

```

**重绘: 元素重新上色**

**回流：修改页面DOM**