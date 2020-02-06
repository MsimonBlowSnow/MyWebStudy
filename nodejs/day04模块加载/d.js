require("./c.js");
console.log(global.a);
//c就是导出的json的模块
var c = require('./d.json');
console.log(c.username);