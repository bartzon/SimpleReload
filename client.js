var socket = io.connect('http://RELOAD_HOST:RELOAD_PORT');

socket.on('connect', function() {
  console.log("Connected to SimpleReload")
})

window.addEventListener('load', function() {
  socket.emit('url', document.location.href)
})

document.addEventListener('page:change', function() {
  socket.emit('url', document.location.href)
})

document.addEventListener('pjax:end', function() {
  socket.emit('url', document.location.href)
})

socket.on('url', function (url) {
  document.location.href = url
});
