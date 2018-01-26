const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const app={};
const routes=[];
//路由池
['get','post','put','delete','options','all'].forEach((method)=>{
    app[method]=(path,fn)=>{
        routes.push({method,path,fn});
    }
   // console.log(method);
});
// app.get('/',(req,res)=>{
//     res.end('hello word');
// })
//路由池遍历
/** 
const passRouter=(method,path)=>{
    let fn;
    for(let route of routes){
        if((route.path===path||route.path==='*')&&(route.method===method||route.method==='all')){
            fn=route.fn;
        }
    }
    if(!fn){
        fn=(req,res)=>{
            res.end(`cannt ${method} ${pathname}`);
        }
    }
    return fn;
}
*/
const lazy=function*(arr){
    yield* arr;
}
const passRouter=(routes,method,path)=>(req,res)=>{
    const lazyRoutes=lazy(routes);
    (function next(){
        const it = lazyRoutes.next().value;
        if (!it) {
            //已经遍历所有路由，没有匹配的路由，停止遍历
            res.end(`Cannot ${method} ${pathname}`)
            return;
          } else if (it.method === 'use' 
            && (it.path === '/'
            || it.path === path
            || path.startsWith(it.path.concat('/')))) {
            //匹配到了中间件
            it.fn(req, res, next);
          } else if ((it.method === method
            || it.method === 'all')
            && (it.path === path
            || it.path === '*')) {
            //匹配到了路由
            it.fn(req, res);
          } else {
            //继续匹配
            next();
          }
    }

    )()
}
app.listen = (port, host) => {
    http.createServer((req, res) => {
      const method = req.method.toLowerCase()
      const urlObj = url.parse(req.url, true)
      const pathname = urlObj.pathname
      const router = passRouter(method, pathname);
      router(req, res);
    }).listen(port, host, () => {
      console.log(`Server running at ${host}\:${port}.`)
    });
  }
console.log(app);
module.exports=app;


