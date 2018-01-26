const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`;
        fs.readFile(viewUrl, 'binary', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
async function route(url) {
    let view = '404.html';
    switch (url) {
        case '/':
            view = 'index.html';
            break;
        case 'index':
            view = 'todo';
            break;
        default:
            break;

    }
    let html = await render(view);
    return html;
}

app.use(async (ctx) => {
   if(ctx.url==='/'&&ctx.method==='GET'){
       let html=`
       <h1>koa2 request post demo</h1>
       <form method="POST" action="/">
         <p>userName</p>
         <input name="userName" /><br/>
         <p>nickName</p>
         <input name="nickName" /><br/>
         <p>email</p>
         <input name="email" /><br/>
         <button type="submit">submit</button>
       </form>
     `
     ctx.body = html;
   }else if(ctx.url==='/'&&ctx.method==='POST'){
       let postData=await parsePostData(ctx);
       ctx.body=postData;
   }else {
       ctx.body='<h1>404！！！ o(╯□╰)o</h1>';
   }
   function parsePostData(ctx){
       return new Promise((resolve,reject)=>{
           try{
               let postdata='';
               ctx.req.addListener('data',(data)=>{
                   postdata+=data;
               });
               ctx.req.addListener('end',function(){
                   let parseData=parseQueryStr(postdata);
                   resolve(parseData);
               })
           }catch(err){
               reject(err);
           }
       })
   }
   function parseQueryStr(queryStr){
       let queryData={};
       let queryStrList=queryStr.split('&');
       console.log(queryStrList);
       for(let [index,queryStr] of queryStrList.entries()){
           let itemList=queryStr.split('=');
          queryData[itemList[0]]=decodeURIComponent(itemList[1]);
          // queryData[itemList[0]]=itemList[1];
       }
       return queryData;
   }
})

app.listen(3000);