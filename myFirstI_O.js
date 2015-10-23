var fs = require('fs');
var filePath = process.argv[2];

var fileString = fs.readFileSync(filePath).toString();
var fileStringArray = fileString.split("\n");
var newlines = fileStringArray.length - 1;

console.log(newlines);