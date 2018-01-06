b.constructor === B.prototype.constructor // true
Point.prototype.constructor === Point // true
//与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
//定义类
class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  
  }
  
  var point = new Point(2, 3);
  
  point.toString() // (2, 3)
  
  point.hasOwnProperty('x') // true
  point.hasOwnProperty('y') // true
  point.hasOwnProperty('toString') // false
  point.__proto__.hasOwnProperty('toString') // true
  //Object.getPrototypeOf方法可以用来从子类上获取父类。因此，可以使用这个方法判断，一个类是否继承了另一个类。

  //由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的,如果属性定义在父类的原型对象上，super就可以取到。
  //通过super调用父类的方法时，方法内部的this指向子类。