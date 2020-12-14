exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT campus, name.tuition_cost, state, net_cost, name.Tuition_income FROM tuition_cost INNER JOIN tuition_income on tuition_income.name = tuition_cost.name GROUP BY name', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('inStatevsOutState',{
				page_title: "In state VS out of state tuition ", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};