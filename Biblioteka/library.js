
function toLibrary(){
	libraryUpdate();
	showResults(biblioteka);
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function searchFor(){
	temp = [];
	libraryUpdate();
	var getText = document.getElementById("Szukaj").value;
	for(i = 0; i < biblioteka.length; i++){
		var objectToString = JSON.stringify(biblioteka[i]);
		var matchText = objectToString.includes(getText);
		if(matchText == true){
			var restart = JSON.parse(objectToString);
			temp.push(restart);
		}
	}
	showResults(temp);
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