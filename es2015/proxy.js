//一个技巧是将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
var object = { proxy: new Proxy(target, handler) };
//目标对象内部的this关键字会指向 Proxy 代理