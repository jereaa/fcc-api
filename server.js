var express = require('express');
var app = express();

app.get('/:date', (req, res) => {

	let unix = Number.parseInt(req.params.date);
	console.log("Unix time: " + unix);

	let date;

	if (!Number.isNaN(unix)) {
		date = new Date(unix * 1000);
	} else {
		date = new Date(req.params.date);
	}

	let response;

	if (Number.isNaN(date.valueOf())) {
		response = {
			unix: null,
			natural: null
		};
	} else {
		response = {
			unix: date.valueOf() / 1000,
			natural: date.toDateString()
		};
	}

	res.status(200).send(response);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});