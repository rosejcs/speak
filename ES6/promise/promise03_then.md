# ES6-Promise-then-catch-finally

Promise.prototype.then()

then定义在原型对象上Promise.prototype上,它的作用是Promise实例添加状态改变时的回调函数

then方法返回的是一个新的Promise实例,因此可以采用链式写法, 即`then`方法后面再调用另一个`then`方法

```
function test(val) {
  return new Promise(resolve=>{
	resolve(val)
  })
}
test(1).then(res=>{
  console.log(res)
  // 这里return将让下一个then接收
  return res+1
}).then(res=>{
  // 这里接收上一个then 创建的新实例中的数据
  console.log(res)
})
```

+ 用`Promise.prototype.catch()` 来获取reject的error 
+ 实际上是
```
.then(
  null,
  rejection
)
```
前面也说过了,then接受两个参数,一个作为resolved时调用, 一个是做为rejected时调用,则
```
p.then(res=>{
  console.log(res) // 异步操作成功时调用then
}).catch(err=>{
  console.log(err) // 异步操作抛出错误时,状态便为rejected,调用catch
})
```
而且与try/catch不同,如果没有使用`.catch`来处理报错,Promise对象抛出的错误不会传递到外层代码,不会有任何反应
```
const errTest = function() {
  return new Promise((resolve,reject)=>{
    resolve(x+2)
  })
}
errTest().then(()=>{
  console.log('hehe')
})
setTimeout(()=>{console.log('没事,你报错管我p事')},2000)
// UnhandledPromiseRejectionWarning: ReferenceError: x is not defined
// '没事,你报错管我p事'
```
上述代码有错误,即x没有声明,报错,但是不影响下方的定时器打印,说明Promise对象内部错误,不影响外部

+ 用`Promise.prototype.finally()`来执行不管异步操作如何,都会执行的操作
```
p
.then(...)
.catch(...)
.finally(...)
```
不管p最后的状态, 在执行完`then`或`catch`指定的回调函数`后`,都会执行finally指定的回调函数

