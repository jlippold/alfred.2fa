var Feedback = require('./Feedback');
var items = new Feedback();
var query;

if (process.argv.length > 1) {
	query = process.argv[2];

	var icon = {
		type: "bad",
		value: "677C2643-CB18-4F61-9854-21D7140DC1FC.png"
	};
	var subtitle = "format: 2f add SERVERNAME SECRET";
	var arg = "badargs";
	var autocomplete = query;

	if (query.split(" ").length === 2) {
		var server = query.split(" ")[0];
		var secret = query.split(" ")[1];
		if (server.length > 1 && secret.length > 1) {
			icon.type = "good";
			icon.value = "C148969E-DF31-4493-9277-7AB8F9232041.png";
			subtitle = "Adding ServerName: " + server + " with secret: " + secret;
			arg = server + " " + secret;
		}
	}

	items.addItem({
		uid: Math.random(),
		arg: arg,
		title: "2f add " + query,
		subtitle: subtitle,
		valid: 'yes',
		icon: icon,
		autocomplete: autocomplete
	});
} else {
	items.addItem({
		uid: "new",
		arg: arg,
		title: "Add New Server",
		subtitle: "2f add ServerName Secret",
		valid: 'yes',
		autocomplete: autocomplete
	});
}



console.log(items.toString());