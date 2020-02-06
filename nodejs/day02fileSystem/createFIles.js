/*
    文件操作案例(初始化目录结构)
*/

const path = require('path');
const fs = require('fs');
let fileContent =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MsimonBlowSnow</title>
</head>
<body>
        <h1>MsimonBlowSnow</h1>
</body>
</html>`;

let root = '//home//ming//web//nodejs//day02fileSystem'
let initData = {
    project: "mydemo",
    data: [{
        name: "img",
        type: "dir",
    }, {
        name: "js",
        type: "dir",
    }, {
        name: "index.html",
        type: "file"
    }, ]
}

//创建项目根路经
fs.mkdir(path.join(root,initData.project),(err)=>{
    if(err)
        return;
        initData.data.forEach(item => {
            if(item.type == "dir")
            //创建子目录
                fs.mkdirSync(path.join(root,initData.project,item.name))
            else if(item.type == "file")
                //创建文件并写入内容
                fs.writeFileSync(path.join(root,initData.project,item.name),fileContent);
        })
});