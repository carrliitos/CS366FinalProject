exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM School', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Schools List", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, in_state_tuition, room_and_board, in_state_total FROM tuition_Cost WHERE tuition_cost < 50,000', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Schools with a total cost under $50,000", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, early_career_pay FROM salary_potential WHERE early_career_pay >=40,000 ORDER BY name', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Schools where entry level pay is more than $40,000", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, state, enrollment FROM diversity_scool WHERE category LIKE ‘woman’', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Schools that have a high percentage of women", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, state, enrollment, early_career_pay FROM diversity_school INNER JOIN salary_potential on diversity_scool.name = salary_potential.name GROUP BY order by name desc limit 5', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Women graduates", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT campus, name.tuition_cost, state, net_cost, name.Tuition_income FROM tuition_cost INNER JOIN tuition_income on tuition_income.name = tuition_cost.name GROUP BY name', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "In state VS out of state tuition ", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};
exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT early_career_pay, name.salary_potential, name.tuition_cost, in_state_total, state FROM tuition_cost INNER JOIN salary_potential on tuition_cost.name = salary_potential.name WHERE state LIKE ‘Wisconsin’', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('customers',{
				page_title: "Wisconsin schools salary potential and tuition", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};