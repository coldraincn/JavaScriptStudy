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


