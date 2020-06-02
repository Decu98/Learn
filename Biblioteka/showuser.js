function showUsers() {
	updateStorage("user");
	showData(users, "showUsers", 'user', "edit");
}

function searchFor() {
	temp = [];
	updateStorage("user");
	var getText = document.getElementById("Szukaj").value;
	for (i = 0; i < users.length; i++) {
		var objectToString = JSON.stringify(users[i]);
		var matchText = objectToString.includes(getText);
		if (matchText == true) {
			var restart = JSON.parse(objectToString);
			temp.push(restart);
		}
	}
	showData(temp, 'showUsers', 'user', "edit");
}
