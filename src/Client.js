/*
cord.js
by cth103
---------
Client
---------
basicly a client,
yep. a client
*/
const Message = require('./Message.js');
const EventEmitter = require('events').EventEmitter;
const request = require('request');
const apibase = "https://discordapp.com/api/";
//not used at all
const ptbapibase = "https://ptb.discordapp.com/api/";
class Client extends EventEmitter {
function(token) {
if (token = null) {
	console.log("ERROR : You need to add a token.");
} else if (gateway().startsWith('{"url": "wss://gateway.discord.gg')) {
   loginWithToken(token);
   this.emit("ready")
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
	function sendMessage(channelid, message) {
		request.post({url: apibase + channelid + '/messages', formData: '{content = ' + message + '}'}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return err;
  }
  return body;
});
}
}
} else {
	 console.log("ERROR : Gateway isn't ready")
}
}
}
function decompressWSMessage(m, f) {
	f = f || {};
	return f.binary ? JSON.parse(Zlib.inflateSync(m).toString()) : JSON.parse(m);
}
function gateway(){
	request(apibase + "/gateway?encoding=json&v=4", function (error, response, body) {
    if (!error && response.statusCode == 200) {
    return body;
    } else {
	return "Error :" + error + " statusCode : " + response.statusCode
	}
    });
}

function loginWithToken(token){
request.post({url: apibase + 'auth/login', formData: '{token = ' + token + '}'}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return err;
  }
  return body;
});
}
function disconnectWithToken(token){
request.post({url: apibase + 'auth/logout', formData: '{token = ' + token + '}'}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return err;
  }
  return body;
});
}
