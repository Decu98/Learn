
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
		var n1 = x[i].Tytuł;
		var n2 = x[i].Autor;
		var n3 = x[i].ISBN;
		var n4 = x[i].ID_;
		var whole = "Tytuł: " + n1 + " " + "Autor: " + n2 + " " + "ISBN: " + n3;
		var newH = document.createElement("P");
		var newB0 = document.createElement("button");
		var newB1 = document.createElement("button");
		newH.setAttribute("id", "P1_" + n4);
		newB0.setAttribute("id", "Button0_" + n4);
		newB1.setAttribute("id", "Button1_" + n4);
		newB0.setAttribute("onclick", "window.location.href = 'editbook.html'; saveEdit(this.id)")
		newB1.setAttribute("onclick", "window.location.href = 'rent.html'; saveEdit(this.id)")
		newB0.innerHTML = "Edytuj";
		newB1.innerHTML = "Wypożycz";
		var textnode = document.createTextNode(whole);
		var position = document.getElementById("Main");
		newH.appendChild(textnode);
		newH.appendChild(newB0);
		newH.appendChild(newB1);
		position.appendChild(newH);
	}
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}













