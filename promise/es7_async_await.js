//function test(x) {
//  return new Promise(resolve=>{
//    setTimeout(()=>{
//      resolve(x)
//    },2000)
//  })
//}
//
//async function t1() {
// let x = await test(10)
// console.log(x)
//}
//
//t1()


function test(x) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(x)
    },2000)
  })
}

// let t1 = async function(x) {
//  let a = await test(20)
//  let b = await test(30)
//  return x+a+b
// }
// t1(10).then(res=>{
//  console.log(res) //60  4s后打印
// })

// (async function(x) { 
//   var p1 = test(20)
//   var p2 = test(30)
//   return x + await p1 + await p2
// })(10).then(v => {
//   console.log(v)  // 2 秒后打印 60
// })

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

// async function p(x) {
//   let res1 = await promise(x);
//   console.log(res1)
//   let res2 = await promise(res1+1)
//   console.log(res2)
//   let res3 = await promise(res2+1)
//   console.log(res1,res2,res3) 
// }
// p(1)

