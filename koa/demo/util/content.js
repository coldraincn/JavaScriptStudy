const path=require('path');
const fs=require('fs');
const dir=require('./dir');
const file=requrire('./file');

async function content(ctx,fullStaticPath){
    let reqPath=path.join(fullStaticPath,ctx.url);
    let exits=fs.existsSync(reqPath);
    let content='';
    if(!exit){
        content='404';
    }else{
        let stat=fs.statSync(reqPath);
        if(stat.isDirectory()){
            content=dir(ctx.url,reqPath);
        }else{
            content=await file(reqPath);
        }
    }
    return conten;
}
module.exports=content;