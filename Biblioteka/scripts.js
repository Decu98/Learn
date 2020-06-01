
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
	switch (type){
		case "book":
			for (var key in x) {
				var book = x[key];
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
			break;
		case "user":
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
			break;
		default:
			console.log("No type");
	}
}

function setId(type) {
	if (type == "book") {
		var BookId_ = localStorage.getItem("BookId");
		if (BookId_ == null) {
			localStorage.setItem("BookId", +BookId_ + 1);
			return +BookId_;
		} else {
			var x = +BookId_ + 1;
			localStorage.setItem("BookId", x);
			return +BookId_;
		}
	}
	if (type == "user") {
		var userId_ = localStorage.getItem("userId");
		if (userId_ == null) {
			localStorage.setItem("userId", +userId_ + 1);
			return +userId_;
		} else {
			var x = +userId_ + 1;
			localStorage.setItem("userId", x);
			return +userId_;
		}
	}
}











