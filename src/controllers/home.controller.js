const fs = require('fs');

exports.getHomePage = (req, res) => {
	let query = "SELECT * FROM School";

	// execute query
	db.query(query, (err, result) => {
		if(err) {
			res.redirect('/');
		}

		res.render('schools.ejs', {
			title: "University Helper | Viewing All Schools",
			schools: result
		});
	});
};