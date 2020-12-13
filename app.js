var express = require('express')
var app = express();
var Database = require('./src/JS/connection.js');

const port = 3000;

app.listen(port, () => {
	console.log("Server started on port " + port);
});