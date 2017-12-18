/**
 * for循环中i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
 * for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
 * ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用
 * 
 * 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
 *  const一旦声明变量，就必须立即初始化，不能留到以后赋值。
 * var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
 * 
 * function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
 */
var tmp = new Date();

function f() {
  console.log(tmp);
  if (true) {
    var tmp = 'hello world';
  }
}

f();