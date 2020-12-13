const mysql = require('mysql')
const credentials = require('../../credentials.json')

// creating connection
const con = mysql.createConnection({
	host : credentials.host,
	user : credentials.user,
	password : credentials.password,
	database : credentials.database
});

// connect
con.connect((err) => {
	if(err) {
		console.log("Error on connection")
		return;
	}
	console.log("Connection established.");
});

con.end((err) => {
	// The connection is terminated
	// Ensures all remaining queries are executed
	// Then sends a quit packet to the MySQL server.
});