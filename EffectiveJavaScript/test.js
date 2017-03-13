function foo(a){
    let result =[],i,n;
    for(i=0,n=a.length;i<n;i++){
        result[i]=function(){return a[i];};
    }
    return result;
}
var wa=foo([10,20,30]);
var f=wa[0];
f();

function f(){return `glo`};
function test(x){
     function f(){return `local`}
    var result=[];
    if(x){
       
        result.push(f());
    }
    result.push(f());
    return result;
}
test(true);
test(false);

var co = require('co');
var debug = require('debug')('v0')

module.exports = {
  middleware :[],
  use: function (fn) {
    debug('use:' + fn);

    this.middleware.push(fn);
    return this;
  },
  callback: function (cb) {
    const fn = this.compose(this.middleware);
    debug('callback compose fn = ' + fn)

    co(fn).then(cb, function (err) {
      console.error(err.stack);
    });
  },
  compose: function (middleware) {
    debug('compose=' + middleware)
    return function *(next){
      if (!next) {
        next = function *(){}
      }

      var i = middleware.length;

      while (i--) {
        debug('compose middleware[' + i + ']=: ' + middleware[i])
        // next = co.wrap(middleware[i]).call(this);
        next = middleware[i].call(this, next);

        debug(next)
      }

      return yield *next;
    }
  } 
}
function com(x,y){
  if(x<y){
    return -1;
  }
  if(x>y){
    return 1;
  }
  return 0;
}
[3,1,4,1,5,9].sort(com);