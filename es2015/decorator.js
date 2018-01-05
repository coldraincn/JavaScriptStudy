function testable(isTestable) {
    return function(target) {
      target.isTestable = isTestable;
    }
  }
  
  @testable(true)
  class MyTestableClass {}
  MyTestableClass.isTestable // true
  
  @testable(false)
  class MyClass {}
  MyClass.isTestable // false

  //实例属性 原型上加
  function testable(target) {
    target.prototype.isTestable = true;
  }
  
  @testable
  class MyTestableClass {}
  
  let obj = new MyTestableClass();
  obj.isTestable // true