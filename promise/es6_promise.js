//function timeout(ms) {
//  return new Promise((resolve, reject) => {
//    setTimeout(resolve, ms, 'done');
//  });
//}
//
//timeout(1000).then((value) => {
//  console.log(value);
//});

//let promise = new Promise(function(resolve, reject) {
//  console.log('Promise');
//  resolve();
//});
//
//promise.then(function() {
//  console.log('resolved.');
//});
//
//console.log('Hi!');

//console.log(new Date())
//const p1 = new Promise(function (resolve, reject) {
//  setTimeout(() => reject(new Error('fail')), 3000)
//})
//
//const p2 = new Promise(function (resolve, reject) {
//  setTimeout(() => resolve(p1), 1000)
//})
//
//p2
//  .then(result => console.log(result))
//  .catch(error => {
//    console.log(new Date())
//    console.log(error)})



//function test(val) {
//  return new Promise(resolve=>{
//	resolve(val)
//  })
//}
//test(1).then(res=>{
//  console.log(res)
//  return res+1
//}).then(res=>{
//  console.log(res)
//})

// function test(val) {
//   return new Promise(()=>{
//     console.log(val)
//   })
// }

// test(1).then(res=>{
//   console.log('then')
// })

/**
 * 内部报错不catch不会出外层代码
 */
// const errTest = function() {
//   return new Promise((resolve,reject)=>{
//     resolve(x+2)
//   })
// }
// errTest().then(()=>{
//   console.log('hehe')
// })
// setTimeout(()=>{console.log('没事,你报错管我p事')},2000)


/**
 * Promise.all()用法代码
 */
// const promises = [ 2, 3, 5, 7, 11, 13 ].map((item) => {
//   return item * 2;
// })
// Promise.all(promises).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

// const p1 = new Promise(resolve=>{
//   resolve(1)
// })
// const p2 = new Promise(resolve=>{
//   resolve(x2)
// })
// const p3 = new Promise(resolve=>{
//   resolve(3)
// })
// Promise.all([p1,p2,p3]).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

/**
 * Promise.resolve()
 */
const jsPromise = Promise.resolve({n:1})
jsPromise.then(res=>{console.log(res);})