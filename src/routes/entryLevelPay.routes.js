exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, early_career_pay FROM salary_potential WHERE early_career_pay <= 40000 ORDER BY name', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('entryLevelPay',{
				page_title: "Entry level pay from colleges", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};