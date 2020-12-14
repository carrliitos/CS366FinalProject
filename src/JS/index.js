const { response } = require("express");
const { createConnection } = require("mysql");

function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
	console.log("Hello!");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if(!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

app.get("", (req, res) =>{
	var schoolID = req.params.id;
		db.query("CALL getSchoolInformation(?)", [schoolID], (error, result, fields) => {
				if(error){
					throw error;
				}else{
					response.mysql(result);
				}
		});
});




app.get("", (req, res) =>{
	db.query("CALL getTuitionCost(?)", [], (error, result, fields) => {
			if(error){
				throw error;
			}else{
				response.mysql(result);
			}
	});
});