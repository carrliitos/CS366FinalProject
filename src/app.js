/* @author Benzon Carlitos Salazar */

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

// load routes
const schoolRoutes = require('./routes/schools.routes');
const homeRoutes = require('./routes/index.routes');
const port = 3000;

// Database connection
const db = mysql.createConnection({
	host: 'washington.uww.edu', //'localhost',
	user: 'heitingjd09',
	password : 'jh0139',
	database:'cs366-2207_heitingjd09'
});

// connect to database
db.connect((err) => {
	if(err) {
		console.log(err);
	}else {
		console.log("Connected to database.");
	}
});

global.db = db;

// Middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// App routes
app.use('/', homeRoutes);
app.use('/schools', schoolRoutes.list);
app.get('*', function(req, res, next){
	res.status(404);
	res.render('404.ejs', {
		title: "Page Not Found"
	});
});

// set the app to listen on the port
app.listen(port, () =>{
	console.log("Server running on port " + port);
});