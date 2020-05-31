
var biblioteka = [];
var users = [];

function libraryUpdate() {
	var loadData = localStorage.getItem('books');
	if (loadData !== null) {
		biblioteka = JSON.parse(loadData);
	}
}

function clearID() {
	localStorage.removeItem("IDofBookEdited");
}

function usersUpdate() {
	var loadData = localStorage.getItem("users");
	if (loadData !== null) {
		users = JSON.parse(loadData);
	}

}

function clearBox(elementID) {
	document.getElementById(elementID).innerHTML = "";
}

function showData(x, id, type) {
	if (type == "book") {
		for (var key in x) {
			var book = x[key]
			var newDivElement = document.createElement("div");
			newDivElement.setAttribute("class", "LibraryBooks");
			var editButton = document.createElement("button");
			var rentButton = document.createElement("button");
			editButton.setAttribute("onclick", `window.location.href = "editbook.html?bookCode=${x[key].BookId_}"`);
			rentButton.setAttribute("onclick", `window.location.href = "rent.html?bookCode=${x[key].BookId_}"`)
			editButton.innerHTML = "Edytuj";
			rentButton.innerHTML = "Wypożycz";
			delete book.BookId_
			delete book.Ilosc;
			delete book.WBibliotece;
			delete book.Wypozyczone;
			for (var element in book) {
				var newX = document.createElement("P");
				var textnode = document.createTextNode(element + ": " + book[element]);
				newX.appendChild(textnode);
				newDivElement.appendChild(newX);
			}
			var position = document.getElementById(id);
			newDivElement.appendChild(editButton);
			newDivElement.appendChild(rentButton);
			position.appendChild(newDivElement);
		}
	}
	if (type == "user") {
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

}












