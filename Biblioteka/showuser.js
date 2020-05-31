function showUsers() {
	usersUpdate();
	displayUsers(users,"showUsers");
}

function displayUsers(x,id) {
	for (var key in x) {
		var helper = x[key];
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
		var position = document.getElementById(id);
		position.appendChild(newDivElement);
	}
}