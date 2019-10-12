# Promise.all()
+ .all() 方法用与将多个Promise实例,包装成一个新的Promise实例
```
const p = Promise.all([p1, p2, p3])
```
Promise.all()接收一个数组作为参数, p1, p2, p3 都是Promise实例(不是实例的情况大家可以自行探究), 如果不是, 就会先调用下面的Promise.resolve方法,将参数转为Promise实例,再进一步处理.
+ `p` 的状态有 `p1`, `p2`, `p3` 决定, 分两种情况

(1)只有p1~3的状态都变成fulfilled(完成),p 的状态次啊会变成fulfilled, 此时p1~3的返回值组成一个数组,传递给p 的回调函数
(2)只要p1~3之中有一个被rejected(失败), p 的状态就变成rejected, 此时第一个被reject的实例的返回值,会传递给p 的回调函数

Example:
```
// 生成一个Promise对象的数组
const promises = [ 2, 3, 5, 7, 11, 13 ].map((item) => {
  return item;
})
Promise.all(promises).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})

const promises = [ 2, 3, 5, 7, 11, 13 ].map((item) => {
  return item * 2;
})
Promise.all(promises).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
```

# Promise.race()
+ 和 `. all()` 对比, p1~3 只要有一个实例率先改变状态, p 的状态随之改变,并接收率先改变的 Promise 实例的返回值, 传递给 p 的回调函数


