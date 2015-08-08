// fs: file system
// npm install fs
var fs = require('fs');


readHistory();

/* functions */

function readHistory() {
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


function createDir() {
	fs.mkdir("./HSAI-Learning/", function() {
		console.log("Create a new HSAI directory.");
	});
}

function readFile() {
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

function createFile() {
	fs.writeFile("./HSAI-Learning/hsai.txt", "", function(err) {
		if (err) throw err;
	});
}

/*fs.writeFile("./HSAI-Learning/hsai.txt", "HSAI Learning Data", function(err) {
    if(err) {
    	fs.mkdir("./HSAI-Learning/", function() {
			console.log("Create a new HSAI directory.")
		});
    }
    console.log("Log recorded.");
});*/

