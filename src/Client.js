/*
cord.js
by cth103
---------
Client
---------
basicly a client,
yep. a client
*/
const Zlib = require('zlib');
const Message = require('./Message.js');
const EventEmitter = require('events').EventEmitter;
const request = require('superagent'); //way better than the "request" module
const apibase = "https://canary.discordapp.com/api/";
class Client extends EventEmitter {
function(token) {
if (token = null) {
	throw new Error("You need to add a token.");
} else if (gateway.startsWith('{"url": "wss://gateway.discord.gg')) {
   loginWithToken(token);
   this.emit("gateway_ready")
	var message = decompressWSMessage(data, flags);
	var _data = message.d;

	//Events
	this.emit('any', message);
	this.emit('debug', message);
	switch (message.t) {
		case "MESSAGE_CREATE":
			this.emit('message', _data.author.username, _data.author.id, _data.channel_id, _data.content, message);
			return 0;
		case "MESSAGE_UPDATE":
			try {
				this.emit('message_update', message, client._messageCache[_data.channel_id][_data.id], _data);
			} catch (e) { this.emit("error", message, undefined, _data); }
			return 0;

}
send_message(msg) {
//soon.
}
}
} else {
	 throw new Error("Gateway isn't ready")
}
}
}
function decompressWSMessage(m, f) {
	f = f || {};
	return f.binary ? JSON.parse(Zlib.inflateSync(m).toString()) : JSON.parse(m);
}

var gateway = function(){
request.get(apibase + "/gateway?encoding=json&v=4, function(err, res){
  if (err) throw err;
  return res.text;
});
}

function loginWithToken(token){
request
     .post(apibase + "/auth/login")
    .send({ token: token })
  if (err) throw err;
  return res.text;
});
}
function disconnectWithToken(token){
request
     .post(apibase + "/auth/logout")
    .send({ token: token })
  if (err) throw err;
  return res.text;
});
}
