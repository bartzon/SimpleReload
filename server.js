var http = require('http')
var fs   = require('fs')
var file = fs.readFileSync('socket.io.js') + "\n\n;\n\n" + fs.readFileSync('client.js')

var host        = process.env.RELOAD_HOST || '127.0.0.1'
var server_port = parseInt(process.env.RELOAD_SERVER_PORT || '9876')
var client_port = parseInt(process.env.RELOAD_CLIENT_PORT || '9877')

file     = file.replace('RELOAD_HOST:RELOAD_PORT', host+':'+server_port)

http.createServer(function(req, res) {
  res.writeHead(200)
  res.end(file)
}).listen(client_port)



var io = require('socket.io').listen(server_port);

var current = ''

io.sockets.on('connection', function (socket) {
  socket.on('url', function(url) {
    if(current != url) {
      socket.broadcast.emit('url', url)
      current = url
    }
  })
});

