# Promise

Promise 是 JavaScript 中用于处理异步操作的一种机制。它是一种表示异步操作最终完成或失败的对象。

## Promise 可以有三种状态：

1. Pending（进行中）：初始状态，表示异步操作正在进行中，尚未完成。
2. Fulfilled（已完成）：表示异步操作成功完成。
3. Rejected（已失败）：表示异步操作失败。

当一个 Promise 对象处于 Pending 状态时，它可以转换为 Fulfilled 或 Rejected 状态。一旦转换为其中一种状态，它就变为不可变的，无法再改变状态。

## Promise API

1. `Promise.resolve(value)`：返回一个以给定值解析的已完成的 Promise 对象。如果传递的值本身就是 Promise 对象，则返回该对象；如果传递的值是 thenable 对象（具有 then 方法），则会转换为 Promise 对象并以相同的状态和值解析。
2. `Promise.reject(reason)`：返回一个以给定原因拒绝的 Promise 对象。
3. `Promise.all(iterable)`：接收一个可迭代对象（如数组）作为参数，并返回一个 Promise 对象。该 Promise 对象在所有的 Promise 对象都变为已完成状态时才会变为已完成状态，并将以一个包含所有 Promise 结果的数组解析。
4. `Promise.race(iterable)`：接收一个可迭代对象（如数组）作为参数，并返回一个 Promise 对象。该 Promise 对象在传入的可迭代对象中的任何一个 Promise 对象变为已完成或已拒绝状态时，该 Promise 对象的状态就会与之相同。
5. `Promise.prototype.then(onFulfilled, onRejected)`：用于注册当 Promise 对象变为 Fulfilled 状态时的回调函数。它接收两个参数 `onFulfilled`（可选）和 `onRejected`（可选）。`onFulfilled` 在 Promise 对象成功时被调用，接收成功的结果作为参数；`onRejected` 在 Promise 对象失败时被调用，接收失败的原因作为参数。`then()` 方法返回一个新的 Promise 对象，可以链式调用多个 `then()` 方法。
6. `Promise.prototype.catch(onRejected)`：用于注册当 Promise 对象变为 Rejected 状态时的回调函数。它接收一个参数 `onRejected`，在 Promise 对象失败时被调用，接收失败的原因作为参数。`catch()` 方法也返回一个新的 Promise 对象。

这些是 Promise 的一些常用 API，还有其他一些方法和属性可以用于处理和操作 Promise 对象。通过使用这些 API，可以更灵活地管理异步操作，并构建清晰、可读性高的异步代码结构。