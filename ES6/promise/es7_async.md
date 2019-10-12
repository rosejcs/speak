# ES7-async function

**async function** 关键字用来在表达式中定义异步函数。当然，你也可以用 [`异步函数语句`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 来定义。

```
function test(x) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(x)
    },2000)
  })
}

// async function expression
let t1 = async function(x) {
  let a = await test(20)
  let b = await test(30)
  return x+a+b
}
t1(10).then(res=>{
  console.log(res) // 4 s后打印 60
})

(async function(x) { 
  var p1 = test(20)
  var p2 = test(30)
  return x + await p1 + await p2
})(10).then(res => {
  console.log(res)  // 2 s后打印 60
})
```

异步函数可以包含[`await`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)指令，该指令会暂停异步函数的执行，并等待Promise执行，然后继续执行异步函数，并返回结果。

记住，await 关键字只在异步函数内有效。如果你在异步函数外使用它，会抛出语法错误。

