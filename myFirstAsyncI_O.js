var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function (error, fileText) {
	if (error == false) {
		console.error("I've made a huge mistake.");
	}
	var fileString = fileText.toString();
	var fileStringArray = fileString.split("\n");
	var newlines = fileStringArray.length - 1;

	console.log(newlines);
});