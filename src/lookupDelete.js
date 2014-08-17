var Feedback = require('./Feedback');
var servers = require('./servers.json');

var items = new Feedback();
var id = 0;

var query;

if (process.argv.length > 1) {
	query = process.argv[2].toLowerCase();
}

servers.forEach(function(server) {
	items.addItem({
		uid: id,
		arg: id,
		title: "Delete: " + server.name,
		subtitle: "Deletes this server forever!",
		valid: 'yes',
		autocomplete: server.name
	});
	id++;
});

console.log(items.toString());