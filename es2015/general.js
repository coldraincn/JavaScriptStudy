//Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
//另外，yield表达式如果用在另一个表达式之中，必须放在圆括号里面
//yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号
//由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
//实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。

let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();

read.next().value // "hello"
read.next().value // "h"