var fs = require('fs');

var COUNT = 10000000;

fs.open('sync.txt', 'w', function(err, fd) {
	if (err) {
		console.log("Error opening file");
		return;
	}

	var data = new Buffer('aa');
	var i;
	for (i = 0; i < COUNT; i++) {
		if(fs.writeSync(fd, data, 0, data.length) < 0) {
			console.log("Error writing file");
			return;
		}
	}
});
