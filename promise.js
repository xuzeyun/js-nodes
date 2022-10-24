/**
  概念
  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理且更强大。
  三种状态
  Pending   进行中
  Fulfilled 已成功
  Rejected  已失败
  两种状态改变
  Pending -> Fulfilled
  Pending -> Rejected
*/



let promise = new Promise((resolve, reject) => {  // 接收两个函数参数，由 JavaScript 提供
  let flag = true;
  if (flag) {
    resolve('success')  // Pending -> Fulfilled 同时将结果作为参数传过去
  } else {
    reject('success')   // Pending -> Rejected
  }
})

promise
  .then((res) => {
    console.log(res, 'res-1')
    res += '!!!'
    return res
  }).then((res) => {
    console.log(res, 'res-2')
  }).catch((err) => {
    console.log(err, 'error')
  })

// async 异步 / await 等待
function sleep(ms) {
  // 返回 Promise，返回 Promise 的函数都可以认为是异步函数
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  })
}
async function handle() {
  console.log("AAA")
  // await 等待
  await sleep(5000)
  console.log("BBB")
}

handle();

// AAA
// BBB (5000ms后)