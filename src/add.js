var Feedback = require('./Feedback');
var servers = require('./servers.json');
var query;

var output = "ERROR try '2f add SERVER SECRET'";

if (process.argv.length > 1) {
	query = process.argv[2];
	if (query.split(" ").length === 2) {
		var server = query.split(" ")[0];
		var secret = query.split(" ")[1];
		if (server.length > 1 && secret.length > 1 && server.toLowerCase() !== "add" && server.toLowerCase() !== "delete") {
			servers.push({
				name: server,
				secret: secret
			});
			var toSave = JSON.stringify(servers);
			saveServer(toSave);
			output = "Added New Server: " + server;
		}
	}
}

function saveServer(toSave) {
	var fs = require('fs');
	fs.writeFile("./servers.json", toSave, function(err) {
		if (err) {
			console.log(err);
		}
	});
}

console.log(output);