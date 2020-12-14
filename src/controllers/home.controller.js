const fs = require('fs');
const controller = {};

controller.getHomePage = (req, res) => {
	let query = "SELECT * FROM School";

	// execute query
	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}

		res.render('schools.ejs', {
			title: "University Helper | Viewing All Schools",
			schools: result
		});
	});
};

controller.getEntryLevelPay = (req, res) => {
	let query = "SELECT name, early_career_pay FROM salary_potential WHERE early_career_pay <= 40000 ORDER BY 'name'";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('entryLevel.ejs', {
				title: "Entry level pay from colleges",
				schools: result
			});
		}
	})
};

controller.getWomenDiversity = (req, res) => {
	let query = "SELECT name, state, total_enrollment FROM Diversity_School WHERE category LIKE ‘woman’";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('womenDiversity.ejs', {
				title: "Universities with High Women Diversity",
				schools: result
			});
		}
	});
};

controller.getInStateOutState = (req, res) => {
	let query = "SELECT campus, name.tuition_cost, state, net_cost, name.Tuition_income FROM tuition_cost INNER JOIN tuition_income on tuition_income.name = tuition_cost.name GROUP BY name";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('inStatevsOutState.ejs', {
				title: "In state VS out of state tuition",
				schools: result
			});
		}
	});
};

controller.getRoomBoardUnder50000 = (req, res) => {
	let query = "SELECT name, in_state_tuition, room_and_board, in_state_total FROM tuition_Cost WHERE tuition_cost < 50000";

	db.query(qery, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('roomBoardUnder50000.ejs', {
				title: "Room and Board under 50,000",
				schools: result
			});
		}
	});
};

controller.getWisconsinSchools = (req, res) => {
	let query = "SELECT early_career_pay, name.salary_potential, name.tuition_cost, in_state_total, state FROM tuition_cost INNER JOIN salary_potential on tuition_cost.name = salary_potential.name WHERE state LIKE ‘Wisconsin’";

	db.query(qery, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('wisconsinSchools.ejs', {
				title: "Wisconsin schools salary potential and tuition",
				schools: result
			});
		}
	});
};

controller.getWomenPower = (req, res) => {
	let query = "SELECT name, state, enrollment, early_career_pay FROM diversity_school INNER JOIN salary_potential on diversity_scool.name = salary_potential.name GROUP BY order by name desc limit 5";

	db.query(qery, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('womenPower.ejs', {
				title: "Women Graduates",
				schools: result
			});
		}
	});
}

/* CALLING STORED PROCEDURES */
controller.getSalary = (req, res) => {
	let query = "DROP PROCEDURE `getSalary`; \
				CREATE DEFINER=`heitingjd09`@`localhost` PROCEDURE `getSalary`() NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN \
					SELECT name, state_name, early_career_pay, mid_career_pay  \
					FROM salary_potential;\
				END";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('getSalary.ejs', {
				title: "Get Salary Stored Procedure",
				schools: result
			});
		}
	});
};

controller.getStateSchoolInformation = (req, res) => {
	let query = "DROP PROCEDURE `getSchoolInformation`; \
				CREATE DEFINER=`heitingjd09`@`localhost` PROCEDURE `getSchoolInformation`(IN `stateCode` VARCHAR(250)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN \
					SELECT * \
					FROM School \
					WHERE State_code = @stateCode; \
				END";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('getStateSchoolInformation.ejs', {
				title: "State School Information",
				schools: result
			});
		}
	});
};

controller.getStateSalary = (req, res) => {
	let query = "DROP PROCEDURE `getStateSalary`; \
				CREATE DEFINER=`heitingjd09`@`localhost` PROCEDURE `getStateSalary`(IN `state` VARCHAR(250)) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER BEGIN \
					SELECT early_career_pay, name.salary_potential, name.tuition_cost, in_state_total, state \
				    FROM Tuition_Cost INNER JOIN salary_potential ON tuition_cost.name = salary_potential.name \
				    WHERE state LIKE @state; \
				END";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('getStateSalary.ejs', {
				title: "State Salary Information",
				schools: result
			});
		}
	});
};

controller.getTuitionCost = (req, res) => {
	let query = "DROP PROCEDURE `getTuitionCost`; \
				CREATE DEFINER=`heitingjd09`@`localhost` PROCEDURE `getTuitionCost`(IN `State` VARCHAR(250)) NOT DETERMINISTIC NO SQL SQL SECURITY DEFINER BEGIN  \
				      SELECT tuition_cost \
				      FROM School, State \
				      WHERE State = @State; \
				END";

	db.query(query, (err, result) => {
		if(err) {
			console.log("Error executing query: ", err);
			res.redirect('/');
		}else {
			res.render('getTuitionCost.ejs', {
				title: "School Tuition Costs",
				schools: result
			});
		}
	});
};

module.exports = controller;