1：构造函数不使用new，接收者为全局对象

2：
function User(name,password){
    var self=this instanceof User?this:Object.create(User.protoytpe);
    self.name=name;
    self.password=password;
    return self;
}