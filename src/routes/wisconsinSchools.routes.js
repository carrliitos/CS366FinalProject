exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT early_career_pay, name.salary_potential, name.tuition_cost, in_state_total, state FROM tuition_cost INNER JOIN salary_potential on tuition_cost.name = salary_potential.name WHERE state LIKE ‘Wisconsin’', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('wisconsinSchools',{
				page_title: "Wisconsin schools salary potential and tuition", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};