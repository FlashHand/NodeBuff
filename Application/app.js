const HOST = '127.0.0.1';
const PORT1 = 5050;//数据库端口
const PORT2 = 5000;//实时数据端口
const TIMEOUT_LONG = 60;
var net = require('net');
queryServer=net.createServer(() => {}).listen(PORT1);
queryServer.on('connection',(client) => {
  //与客户端建立连接
  console.log(PORT1 + '~' +'connection:' + client.remoteAddress);
  // client.setTimeout(TIMEOUT_LONG,() => {
  //   console.log('destroy' + client.remoteAddress);
  //   client.destroy();
  // });
  //收到客户端消息
  var watch='BEGINWATCH00100000;100;\r\n'
  const buffer=Buffer.from(watch,'ascii');

  client.write(buffer);

  client.on('data', function(receivedData) {
    console.log(PORT1 + '~' +receivedData);

  });

  //和客户端断开
  client.on('close', function(data) {
      console.log(PORT1 + '~' +'CLOSED: ' +
          client.remoteAddress + ' ' + client.remotePort);
  });
  client.on('error', function(error) {
      console.log(PORT1 + '~' +'error: ' + error);
  });

});


upServer=net.createServer(() => {}).listen(PORT2);
upServer.on('connection',(client) => {
  //与客户端建立连接
  console.log(PORT2 + '~' +'connection:' + client.remoteAddress);
  // client.setTimeout(TIMEOUT_LONG,() => {
  //   console.log('destroy' + client.remoteAddress);
  //   client.destroy();
  // });
  //收到客户端消息
  client.on('data', function(receivedData) {
    console.log(PORT2 + '~' +receivedData);
  });

  //和客户端断开
  client.on('close', function(data) {
      console.log(PORT2 + '~' +'CLOSED: ' +
          client.remoteAddress + ' ' + client.remotePort);
  });
  client.on('error', function(error) {
      console.log(PORT2 + '~' +'error: ' + error);
  });

});
