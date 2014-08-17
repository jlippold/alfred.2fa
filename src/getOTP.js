var servers = require('./servers.json');
var TOTP = require('onceler').TOTP;
var action;

if (process.argv.length > 1) {
	action = process.argv[2];
}

if (action) {
	var idx = parseInt(action, 10);
	var totp = new TOTP(servers[idx].secret);
	var otp = totp.now().toString();
	process.stdout.write(otp);
}