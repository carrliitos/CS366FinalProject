const mysql = require('mysql')
const credentials = require('../../credentials.json')

// creating connection
const db = mysql.createConnection({
	host : credentials.host,
	user : credentials.user,
	password : credentials.password,
	database : credentials.database
});

// connect
db.connect((err) => {
	if(err) {
		console.log("Error on connection")
	}
	console.log("MySQL connected!");
});