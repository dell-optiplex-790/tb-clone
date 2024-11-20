var he = require('he')
var io = require('socket.io-client')
var socket = io('http://fbin.duckdns.org')

socket.emit('user joined', 't!templatebot', 'plum', '', '')
socket.on('message', (data) => {
	msg = he.decode(data.msg) // make it less of a headache to write later on
	if(msg==='t!hello') {
		socket.send('hello, world')
	}
	
	if(msg.slice(0,6)==='t!say ') {
		socket.send(msg.slice(6))
	}
})