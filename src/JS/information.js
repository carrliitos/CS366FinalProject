universities = [
	{
		name: "University of Wisconsin - Whitewater",
		desc: "4-year",
		type: "Public",
		state: "WI"
	},
	{
		name: "University of Wisconsin - Madison",
		desc: "4-year",
		type: "Public",
		state: "WI"
	},
	{
		name: "University of Wisconsin - Milwaukee",
		desc: "4-year",
		type: "Public",
		state: "WI"
	},
	{
		name: "University of Wisconsin - Washington County",
		desc: "2-year",
		type: "Public",
		state: "WI"
	}
]

displayUniversity();

function displayUniversity() {
	let universityInfo = "";
	universities.forEach((university) => {
		universityInfo += createUniversityInfo(university)
	});

	document.querySelector("#universityList").innerHTML = universityInfo;
}

function createUniversityInfo(university) {
	let trow = "";
	trow += `<tr><td>${university.name}</td>
			<td>${university.desc}</td>
			<td>${university.type}</td>
			<td>${university.state}</td>
			</tr>`;
	return trow;
}