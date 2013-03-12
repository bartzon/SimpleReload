var socket = io.connect('http://RELOAD_HOST:RELOAD_PORT');

socket.on('connect', function() {
})

window.addEventListener('load', function() {
  socket.emit('url', document.location.href)
})

socket.on('url', function (url) {
  document.location.href = url
});
