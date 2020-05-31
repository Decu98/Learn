
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
	for(var key in x){
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
		for(var element in book){
			var newX = document.createElement("P");
			var textnode = document.createTextNode(element + ": " + book[element]);
			newX.appendChild(textnode);
			newDivElement.appendChild(newX);
		}
		var position = document.getElementById("Main");
		newDivElement.appendChild(editButton);
		newDivElement.appendChild(rentButton);
		position.appendChild(newDivElement);
	}
}