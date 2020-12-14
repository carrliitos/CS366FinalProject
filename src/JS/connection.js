const mysql = require('mysql')

// creating connection
const db = mysql.createConnection({
	host: 'washington.uww.edu', //'localhost',
	user: 'heitingjd09',
	password : 'jh0139',
	database: 'cs366-2207_heitingjd09'
});

// connect
db.connect((err) => {
	if(err) {
		console.log("Error on connection.");
	}else {
		console.log("MySQL connected!");
	}
});
