var process = require("process");
var fs = require("fs");

var first_value = process.argv[2]; //value will be "banana"
var second_value = process.argv[3]; //value will be "monkey"
var third_value = process.argv[4]; //value will be "monkey"

if (first_value === "--create-dir") {
  fs.mkdirSync(second_value);
} else if (first_value === "--remove-dir") {
  fs.rmdirSync(second_value);
} else if (first_value === "--rename-dir") {
  fs.renameSync(second_value, third_value);
} else if (first_value === "--create-file") {
  fs.writeFile(second_value, third_value);
}
