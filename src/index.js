var mysql = require('mysql')

var con = mysql.createConnection({
	host: "washington.uww.edu",
	user: "salazarbc24",
	password: "bs0288"
});

// con.connect(function(err) {
// 	if(err) throw err;
// 	console.log("Connected to database!");
// });

/**
* When the user clicks on the button,
* toggle between hiding and showing the dropdown content
*/
function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
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