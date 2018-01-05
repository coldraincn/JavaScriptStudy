//只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
//第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
//另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误

//await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

//多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;