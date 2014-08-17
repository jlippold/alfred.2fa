var servers = require('./servers.json');
var output = "error deleting";
var action;

if (process.argv.length > 1) {
	action = process.argv[2];
}

if (action) {
	var idx = parseInt(action, 10);
	output = "Removed " + servers[idx].name;
	servers.splice(idx, 1);
	console.log(output);
	saveServer(JSON.stringify(servers));
}


function saveServer(toSave) {
	var fs = require('fs');
	fs.writeFile("./servers.json", toSave, function(err) {
		if (err) {
			//console.log(err);
		}
	});
}

