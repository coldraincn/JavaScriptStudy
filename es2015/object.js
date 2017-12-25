+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
//由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。如果undefined和null不在首参数，就不会报错。
Object.assign(undefined) // 报错
Object.assign(null) // 报错
//除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

//Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

//扩展运算符的解构赋值，不能复制继承自原型对象的属性。
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...{ y, z } } = o;
x // 1
y // undefined
z // 3
