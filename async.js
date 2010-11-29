var fs = require('fs');

var COUNT = 10000000;

fs.open('async.txt', 'w', function(err, fd) {
	if (err) {
		console.log("Error opening file");
		return;
	}

	var data = new Buffer('aa');
	var i;
	for (i = 0; i < COUNT; i++) {
		fs.write(fd, data, 0, data.length, function(err, written) {
			if (err) {
				console.log("Error writing to file");
			}
		});
	}
});
