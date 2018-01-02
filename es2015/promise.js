//调用resolve或reject并不会终结 Promise 的参数函数的执行。所以，最好在它们前面加上return语句，这样就不会有意外。

//如果 p2 返回p1，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是pending，
//那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

//如果 Promise 状态已经变成resolved，再抛出错误是无效的。
const promise = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
  });
  promise
    .then(function(value) { console.log(value) })
    .catch(function(error) { console.log(error) });
  // ok

  const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
  });
  promise.then(function (value) { console.log(value) });
  // ok
  // Uncaught Error: test
  //Promise 指定在下一轮“事件循环”再抛出错误。到了那个时候，Promise 的运行已经结束了，所以这个错误是在 Promise 函数体外抛出的，会冒泡到最外层，成了未捕获的错误。

  //promise.all
  //如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法

  setTimeout(function () {
    console.log('three');
  }, 0);
  
  Promise.resolve().then(function () {
    console.log('two');
  });
  
  console.log('one');
  
  // one
  // two
  // three  立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
