
var ws = require("nodejs-websocket");
var PORT = 3000;

// 不只有一个客户端连接
var clientCount = 0;

var connections = []; //进来的人

// 群组的成员的表
var groups = [];
groups = [{
        id: 1,
        members: ['xiaohong', 'xiaoming', 'xiaozhang']
    },
    {
        id: 2,
        members: ['xiaohong', 'xiaoming', 'xiaoli']
    }
];

// 在线人员的表 group在线
var onlines = [];
// 单聊在线
var signallines = [];

// 每个用户的好友列表
var xiaohong = ['xiaoming', 'xiaozhang', 'xiaoli'];
var xiaoming = ['xiaohong', 'xiaoli'];
var xiaozhang = ['xiaohong', 'xiaoli'];
var xiaoli = ['xiaohong', 'xiaozhang'];




Array.prototype.contains = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}

Array.prototype.remove = function(val) {
    for(var i=0; i<this.length;i++){
        var index = this.indexOf(val);
        if(index>-1){
            this.splice(index,1);
        }
    }
};


//创建一个服务
var server = ws.createServer(function(conn) {
    console.log("New connection");
    // 客户端有消息的时候的回到函数
    clientCount++;

    var user;

    conn.on("text", function(str) {
        // 接收到客户端的消息时的处理
        // 这里的打印会在终端显示出来

        // var user = JSON.parse(str);

        user = JSON.parse(str);


         
        if (user.group != undefined) {
            if (user.group == 1) {
                if (groups[0].members.contains(user.name)) {
                    console.log('可以进入群聊');
                    onlines.push(user.name);  //群聊的人在线状态的标识
                } else {
                    return;
                }
            } else if (user.group == 2) {
                if (groups[1].members.contains(user.name)) {
                    console.log('可以进入群聊');
                    onlines.push(user.name);
                } else {
                    return;
                }
            }
        } else {
            connections.push(user); // 如果不是群聊是单聊
        }

        // 当发起单聊的人超过1个人的时候，就要确定单聊的路线
        if (connections.length > 1) {
            for (var i = 0; i < connections.length; i++) {
                for (var j = i + 1; j < connections.length; j++) {
                    // 这里是判断单聊的路线，toname是要发送的人和要接受的人是否一样
                    if (connections[i].toname == connections[j].name &&
                        connections[j].toname == connections[i].name) {
                        signallines.push(connections[j].toname);
                        signallines.push(connections[j].name);

                    }
                }
            }
        }


        // user.count = clientCount;
        console.log("Received " + str);

       // 下面这些就是通过上面的信息，组织下要发送的信息

        var mes = {};
        mes.type = user.type;
        if (mes.type == 'enter') {
            mes.data = user.name;
        } else {
            mes.data = user.data;
        }
        mes.num = user.count;
        mes.name = user.name; //发起会话的人的姓名  这里最好使用id
        mes.toname = user.toname; //只会在单聊的时候存在，要发送给谁，也最好用id
        mes.groupnumber = user.group; //群聊的时候，群聊的id

        console.log('onlines', onlines);
        console.log('toname', mes.toname);

        if (user.group != undefined) {
            // 你要单独给好友聊天，这里检测好友是否在群聊
            if (onlines.contains(mes.toname)) {
                console.log('我要发送的对象在线')
                 broadcast(JSON.stringify("好友在忙碌"));
            } else {
                broadcast(JSON.stringify(mes));
            }
        } else {
            // 你要单独给好友聊天，这里检测好友是否在和别人聊天
            if (signallines.contains(mes.toname) && signallines.contains(mes.name)) {
                broadcast(JSON.stringify(mes));
            } else {
                console.log('我要发送的---对象在线')
                broadcast(JSON.stringify("好友在忙碌"));
                
            }
        }

        console.log('broadcast', JSON.stringify(mes));
    })

    conn.on("close", function(code, reason) {
        console.log("code closed", code);
        console.log("reason closed", reason)
        clientCount = 0;
        var mes = {}
        mes.type = "leave"
        mes.data = user.name + 'leave';

        // 离开群组或者离开单聊的时候，要把状态清空
        onlines.remove(user.name);
        connections.remove(user.name);
        signallines.remove(user.name);
        broadcast(JSON.stringify(mes))
    })

    conn.on("error", function(err) {
        console.log('handle err');
        console.log(err);
    })

}).listen(PORT)
console.log("websocket server listening porter 3000")

function broadcast(str) {
    console.log('str', str);
    // 取到server下面的所有连接
    server.connections.forEach(function(connection) {
        connection.sendText(str);
    })
}