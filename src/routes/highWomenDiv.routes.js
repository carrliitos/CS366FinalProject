exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, state, enrollment FROM diversity_school WHERE category LIKE ‘woman’', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('highWomenDiversity',{
				page_title: "universities with High Women Diversity", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};