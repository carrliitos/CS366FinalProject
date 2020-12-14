exports.list = function(req, res){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT name, in_state_tuition, room_and_board, in_state_total FROM tuition_Cost WHERE tuition_cost < 50000', function(err, rows) {
			if(err)
					console.log("Error Selecting : %s ", err );
			res.render('roomBoardUnder50000',{
				page_title: "Room and Board under 50,000", 
				data: rows
			});
		 });
	 console.log(query.sql);
	});
};