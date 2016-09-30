const HOST = '127.0.0.1';
const PORT1 = 5050;//数据库端口
const PORT2 = 5000;//实时数据端口
const TIMEOUT_LONG = 60;
var net = require('net');
  queryServer=net.createServer(() => {}).listen(PORT2);
  queryServer.on('connection',(client) => {
    //与客户端建立连接
    console.log('connection:' + client.remoteAddress);
    // client.setTimeout(TIMEOUT_LONG,() => {
    //   console.log('destroy' + client.remoteAddress);
    //   client.destroy();
    // });
    //收到客户端消息
    client.on('data', function(receivedData) {
      console.log(receivedData);
    });

    //和客户端断开
    client.on('close', function(data) {
        console.log('CLOSED: ' +
            client.remoteAddress + ' ' + client.remotePort);
    });

  });
