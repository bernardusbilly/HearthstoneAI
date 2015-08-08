// fs: file system
// npm install fs

var fs = require('fs');

/* functions */

exports.readHistory = function() {
	fs.readdir('./HSAI-Learning', function(err, data) {
		if (err) {
			// HSAI-Learning not exists
			console.log("HSAI-Learning Directory not exists");
			createDir();
		}
		// HSAI-Learning exists
		return readFile();
	});
}


exports.createDir = function() {
	fs.mkdir("./HSAI-Learning/", function() {
		console.log("Create a new HSAI directory.");
	});
}

exports.readFile = function() {
	fs.readFile('./HSAI-Learning/hsai.txt', 'utf8', function (err, data) {
		if (err){
			// hsai.txt not exists
			createFile();
			return "";
		} else {
			// hsai.txt exists
			console.log(data);
			return data;
		}
	});	
}

exports.createFile = function() {
	fs.writeFile("./HSAI-Learning/hsai.txt", "", function(err) {
		if (err) throw err;
	});
}

