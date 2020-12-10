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
	},
	{
		name: "University of Wisconsin - Rock County",
		desc: "2-year",
		type: "Public",
		state: "WI"
	},
	{
		name: "University of Wisconsin - Marathon County",
		desc: "2-year",
		type: "Public",
		state: "WI"
	},
	{
		name: "Blackhawk Technical College",
		desc: "2-year",
		type: "Public - Technical",
		state: "WI"
	},
	{
		name: "Alverno College",
		desc: "4-year",
		type: "Private",
		state: "WI"
	},
	{
		name: "Marquette University",
		desc: "4-year",
		type: "Private",
		state: "WI"
	},
	{
		name: "Mount Mary University",
		desc: "4-year",
		type: "Private",
		state: "WI"
	}
]

displayInformation();

function displayInformation() {
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