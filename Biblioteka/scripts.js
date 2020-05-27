
var biblioteka = [];
var temp = [];
var id_ = 0;
function _addbook(){
	libraryUpdate();
	var tytul = document.getElementById('Tytul').value;
	var autor = document.getElementById('Autor').value;
	var isbn = document.getElementById('ISBN').value;
	var ilosc = document.getElementById('Ilosc').value;
	if(tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0){
		alert("Uzupełni dane");
	}else{
		var ksiazka = {Tytuł: tytul, Autor: autor, ISBN: isbn, Ilość: ilosc, ID_: id_};
		id_++;
		biblioteka.push(ksiazka)
		localStorage.setItem('books', JSON.stringify(biblioteka));
	
	}	
}

function toLibrary(){
	libraryUpdate();
	showResults(biblioteka);
}
function libraryUpdate(){
	var loadData = localStorage.getItem('books');
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
}

function saveEdit(x){
	localStorage.setItem("IDofBookEdited", x);
}

function clearID(){
	localStorage.removeItem("IDofBookEdited");
}

function approveEdit(){
	libraryUpdate();
	var getID = localStorage.getItem("IDofBookEdited");
	var getBooks = localStorage.getItem("books");
	var IDtransfer = Number(getID.split("_").pop());
	var newTitle = document.getElementById("TitleEdit").value;
	var newAuthor = document.getElementById("AuthorEdit").value;
	var newCount = document.getElementById("CountEdit").value;
	var temporarySave = JSON.parse(getBooks);
	temporarySave[IDtransfer].Tytuł = newTitle;
	temporarySave[IDtransfer].Autor = newAuthor;
	temporarySave[IDtransfer].Ilość = newCount;
	localStorage.setItem('books', JSON.stringify(temporarySave));
	localStorage.removeItem("IDofBookEdited");
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
		var _title = "Tytuł: " + book.Tytuł;
		var _author = "Autor: " + book.Autor;
		var _isbn = "ISBN: " + book.ISBN;
		var newH = document.createElement("div");
		newH.setAttribute("id", "Div_" + i)
		newH.setAttribute("class", "LibraryBooks");
		var newB0 = document.createElement("button");
		var newB1 = document.createElement("button");
		newB0.setAttribute("id", "Button0_" + book.ID_);
		newB1.setAttribute("id", "Button1_" + book.ID_);
		delete book.ID_;
		delete book.Ilość;
		for(var key in book){
			var newX = document.createElement("P");
			var textnode = document.createTextNode(key + ": " + book[key]);
			newX.appendChild(textnode);
			newH.appendChild(newX);
		}

		newB0.setAttribute("onclick", "window.location.href = 'editbook.html'; saveEdit(this.id)")
		newB1.setAttribute("onclick", "window.location.href = 'rent.html'; saveEdit(this.id)")
		newB0.innerHTML = "Edytuj";
		newB1.innerHTML = "Wypożycz";
		//var textnode = document.createTextNode(whole);
		var position = document.getElementById("Main");
		//newH.appendChild(textnode);
		newH.appendChild(newB0);
		newH.appendChild(newB1);
		position.appendChild(newH);
	}
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function rent_open(){
	libraryUpdate();
	var getID = localStorage.getItem("IDofBookEdited");
	var IDtransfer = Number(getID.split("_").pop());
	document.getElementById("rent_title").innerHTML = "Tytuł: " + biblioteka[IDtransfer].Tytuł;
	document.getElementById("rent_author").innerHTML = "Autor: " + biblioteka[IDtransfer].Autor;
	document.getElementById("rent_isbn").innerHTML = "ISBN: " + biblioteka[IDtransfer].ISBN;
	document.getElementById("rent_amout").innerHTML = "Ilość: " + biblioteka[IDtransfer].Ilość;
}













