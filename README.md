# SimpleReload

Super simple reloading of multiple browser windows. 
SimpleReload listens to the ```window.load``` event in a browser window, the broadcasts the current url
to all other listening browsers via [socket.io][http://socket.io].

## Requirements
You need to have ```node``` installed.

## Usage
First, start the WebSockets server using:

```
node server.js
```

An optional host and port can be specified via ```RELOAD_HOST```, ```RELOAD_SERVER_PORT```, ```RELOAD_CLIENT_PORT```. 
Variables are optional, 127.0.0.1 will be used as host, 9876 as server port, and 9877 as client port.

Then, add the following Javascript to your pages:

```
<script type="text/javascript" src="http://RELOAD_HOST:RELOAD_CLIENT_PORT/client.js"></script>
```

The socket.io server runs on port ```RELOAD_SERVER_PORT```, the client javascript will be served using port ```RELOAD_CLIENT_PORT```.

To use SimpleReload on your mobile devices, connect them to the same WiFi as your web server,
figure out your ip address using something like ```ifconfig``` and use that as ```RELOAD_HOST```.
