exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, state, enrollment, early_career_pay FROM diversity_school INNER JOIN salary_potential on diversity_scool.name = salary_potential.name GROUP BY order by name desc limit 5', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('WomenPower',{
				page_title: "Women Graduates", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};