/*
cord.js
by cth103
---------
Client
--------
*/
const Zlib = require('zlib');
const Message = require('./Message.js');
const EventEmitter = require('events').EventEmitter;
const request = require('superagent'); //way better than the "request" module
const apibase = "https://discordapp.com/api/";
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
                case "GUILD_CREATE":
			this.emit("new_guild");
		case "GUILD_UPDATE":
			this.emit("guild_update");
		case "GUILD_DELETE":
			this.emit("guild_delete");
		case "GUILD_MEMBER_ADD":
			this.emit("member_add");
		case "GUILD_MEMBER_UPDATE":
			this.emit("member_update");
		case "GUILD_MEMBER_REMOVE":
			this.emit("member_remove");
		case "GUILD_ROLE_CREATE":
			this.emit("role_create");
		case "GUILD_ROLE_UPDATE":
			this.emit("role_update");
		case "GUILD_ROLE_DELETE":
			this.emit("role_delete");
		case "GUILD_EMOJIS_UPDATE"
			this.emit("emojis_update");
}
send_message(toid ,msg) {
///gunna do it
request
     .post(apibase + "/channels/" + toid + "/messages")
    .send({ content: msg })
});
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
request.get(apibase + "/gateway?encoding=json&v=4", function(err, res){
  if (err) throw err;
  return res.text;
});
}

function loginWithToken(token){
request
     .post(apibase + "/auth/login")
    .send({ token: token })
function(err, res){
  if (err) throw err;
  return res.text;
});
}
function disconnectWithToken(token){
request
     .post(apibase + "/auth/logout")
    .send({ token: token })
function(err, res){
  if (err) throw err;
  return res.text;
});
}
