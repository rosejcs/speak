ES7-await

`await`  操作符用于等待一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。它只能在异步函数 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 中使用

- await 表达式会暂停当前 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 的执行，等待 Promise 处理完成。
- 若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)。
- 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

```
function test(x) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(x)
    },2000)
  })
}

async function t1() {
 let x = await test(10)
 console.log(x)
}

t1()
```

实例代码

```
// Promise链式回调
function promise(x) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(x)
    },1000)
  })
}

promise(1).then(res=>{
  console.log(res);
  return promise(res+1)
}).then(res=>{
  console.log(res)
  return promise(res+1)
}).then(res=>{
  console.log(res)
})

// 用 async 和 await 简化

async function p(x) {
  let res1 = await promise(x);
  console.log(res1)
  let res2 = await promise(res1+1)
  console.log(res2)
  let res3 = await promise(res2+1)
  console.log(res1,res2,res3) 
}
p(1)
```

