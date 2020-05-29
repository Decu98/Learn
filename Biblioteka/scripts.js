
var biblioteka = [];
var temp = [];

function libraryUpdate(){
	var loadData = localStorage.getItem('books');
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
}

function showResults(x){
	for(i = 0; i < x.length; i++){
		var book = x[i];
		var newDivElement = document.createElement("div");
		newDivElement.setAttribute("class", "LibraryBooks");
		var editButton = document.createElement("button");
		var rentButton = document.createElement("button");
		editButton.setAttribute("id", "Button0_" + book.ID_);
		rentButton.setAttribute("id", "Button1_" + book.ID_);
		delete book.Ilość;
		for(var key in book){
			var newX = document.createElement("P");
			var textnode = document.createTextNode(key + ": " + book[key]);
			newX.appendChild(textnode);
			newDivElement.appendChild(newX);
		}

		editButton.setAttribute("onclick", `window.location.href = "editbook.html?bookCode=${book.ID_}"`);
		rentButton.setAttribute("onclick", `window.location.href = "rent.html?bookCode=${book.ID_}"`)
		editButton.innerHTML = "Edytuj";
		rentButton.innerHTML = "Wypożycz";
		var position = document.getElementById("Main");
		newDivElement.appendChild(editButton);
		newDivElement.appendChild(rentButton);
		position.appendChild(newDivElement);
	}
}

function clearID(){
	localStorage.removeItem("IDofBookEdited");
}













