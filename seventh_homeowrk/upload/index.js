let server = require("./server.js")
//导入路由
let router = require("./router.js")
//将路由和处理程序联系起来
let requestHandlers = require('./requestHandlers')
let handle = {}
//requestHandlers中保存的是一些方法，handle对象是建立起路径与方法之间的映射，根据请求地址的不同执行不同的方法
handle["/"]= requestHandlers.start;
handle["/start"]= requestHandlers.start;
handle["/upload"]= requestHandlers.upload;
handle["/show"]= requestHandlers.show;
//将映射表和route作为参数传入start函数，router.route是根据映射表调用方法
server.start(router.route,handle)