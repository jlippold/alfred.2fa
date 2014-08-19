var Feedback = require('./Feedback');
var servers = require('./servers.json');

var items = new Feedback();
var id = 0;

var query;

if (process.argv.length > 1) {
	query = process.argv[2].toLowerCase();
}

var icon = {
	type: "key",
	value: "E71BC0F3-3905-4C17-AD6E-BE87BD48238B.png"
};

servers.forEach(function(server) {
	if (!query || server.name.toLowerCase().substring(0, query.length) === query) {
		items.addItem({
			uid: id,
			arg: id,
			title: server.name,
			subtitle: 'Sends ' + server.name + ' one time password to clipboard',
			valid: 'yes',
			autocomplete: server.name,
			icon: icon
		});
	}
	id++;
});

console.log(items.toString());