exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM School', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('schools',{
				page_title: "Schools List", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};