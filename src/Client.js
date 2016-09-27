/*
cord.js
by cth103
---------
Client
---------
basicly a client,
yep. a client
*/
const EventEmitter = require('events').EventEmitter;
const request = require('request');
const apibase = "https://discordapp.com/api/";
//not used at all
const ptbapibase = "https://ptb.discordapp.com/api/";
class Client extends EventEmitter {
function(token) {
if (token = null) {
	console.log("ERROR : You need to add a token.");
} else {
   loginWithToken(token);
}
}
}

function gateway(token){
	request(apibase + "?encoding=json&v=4&authorization=" + token, function (error, response, body) {
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
