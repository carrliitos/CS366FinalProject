const express = require('express')
const app = express();

const Databasse = require('./src/JS/connection.js')

app.listen('3000', () => {
	console.log("Server started on port 3000");
});