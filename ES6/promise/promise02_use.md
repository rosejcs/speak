# ES6-Promise-用法

##### 一. ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例。

```
const promise = new Promise(function(resolve, reject) {
  // 你的代码

  if (/* 异步操作成功 */){
    resolve(value);// 在实例then中第一个参数回调中接住value
  } else {
    reject(error);// 在实例then中第二个参数回调函数接住error
  }
});
```

- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）

##### 二. 接收Promise实例对象 返回的结果

```
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

> `Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。(第二个函数可选)				

```
Example 1-1: 
function timeout(ms) {
  // 创建一个 Promise 构造函数的 实例
  return new Promise((resolve, reject) => {
    // 以参数 ms , 由resolve将完成状态的值 value(即'done') 输出
    setTimeout(resolve, ms, 'done');
  });
}
// 则我们调用 timeout函数, 传递1s的时间参数, 则在内部定时器结束(1s)后执行返回的Promise实例的值value,用then接收
timeout(1000).then((value) => {
  console.log(value);
});
```

> ps: Promise 新建后就会立即执行。表示Promise的创建是同步的,立即执行的, 比如 ,我在创建Promise实例中 打印了1, 则在整个代码中, 是立即执行的打印,再执行队列中的代码

```
let promise = new Promise(function(resolve, reject) {
// 创建实例中 打印  1
  console.log('1');
  resolve();
});
promise.then(function() {
  // 异步回调打印  2
  console.log('2');
});
// Promise外的普通代码, 打印 3
console.log('3');

猜猜 打印顺序
```

当然在外面的企业面试中,有大量的Promise的面试题, 针对这种执行顺序的 也有不少

比方说:

```
在nodejs中运行以下代码, 解释以下代码执行顺序
setTimeout(()=>{console.log(1)},0)
new Promise((resolve)=>{
  console.log(2)
  for(var i=1; i<10000; i++) {
  	i == 9999 && resolve()
  }
  console.log(3)
}).then(()=>{ console.log(4) })
console.log(5)
```

> **宏观任务**：如setTimeout、setInterval、setImmediate，I/O

​		只要记住,  只有微观任务完成, 宏观任务才执行完毕

##### Promise中 位置与 执行顺序

```
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(res => {
  console.log(res);
});
```

调用resolve或reject并不会终结 Promise 的参数函数的执行。

立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。

所以结果是2,1

要避免这种情况,直接使用return

