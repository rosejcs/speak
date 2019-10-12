# Promise.resolve()

+ 要将一个现有对象转为 **Promise**对象, Promise.resolve()方法就这个作用

```
const jsPromise = Promise.resolve({
  n: 1
})
```
`Promise.resolve(val)` 等价于 `new Promise(resolve=> resolve(val))`
(1) 如果参数val是一个Promise实例, 则不做任何修改
(2) 参数是一个thenable ,表示一个有then方法的对象
```
let thenabel = {
  then(resolve,reject) {
    resolve(42)
  }
}
let p1 = Promise.resolve(thenable)
p1.then((res)=>{console.log(res)}) // 42
```
(3) 参数不具有then方法的对象,或不是对象(原始值)
```
const  p = Promise.resolve('hehe')
p.then(res=>{console.log(res)}) // 'hehe'
```

(4) 不带任何参数
直接返回一个resolved状态的Promise对象

注: 立即resolve()的Promise对象, 是在本轮'事件循环'(event loop)的结束执行, 而不是下一轮'事件循环'的开始时

```
setTimeout(()=>{console.log(1)},0)
Promise.resolve().then(()=>{console.log(2)})
console.log(3)

















// 3  2  1
```
setTimeout(callback, 0) ---下一轮'事件循环'开始时执行
Promise.resolve()----------本轮'事件循环'结束时执行
console.log(3)-------------立即执行

