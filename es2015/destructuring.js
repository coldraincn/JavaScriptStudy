/**
 * 变量的解构赋值
 * 
 * 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，Iterator），那么将会报错。
 * let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5

ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null


对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined

// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error
// 正确的写法
let x;
({x} = {x: 1});

let {length : len} = 'hello';
len // 5

解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

undefined就会触发函数参数的默认值。

[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]

 */

// let x = 1;
// let y = 2;

// [x, y] = [y, x];
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  
  let { id, status, data } = jsonData;
  
  console.log(data);