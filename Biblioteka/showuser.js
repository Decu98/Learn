function showUsers() {
	usersUpdate();
	displayUsers();
}

function displayUsers() {
	for (var key in users) {
		var helper = users[key];
		var newDivElement = document.createElement("div");
		newDivElement.setAttribute("class", "LibraryBooks");
		delete helper.Id;
		delete helper.Rented;
		for (var element in helper) {
			var newX = document.createElement("P");
			var textnode = document.createTextNode(element + ": " + helper[element]);
			newX.appendChild(textnode);
			newDivElement.appendChild(newX);
		}
		var position = document.getElementById("show-users");
		position.appendChild(newDivElement);
	}
}