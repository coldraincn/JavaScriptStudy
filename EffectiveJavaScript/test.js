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