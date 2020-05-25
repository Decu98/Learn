
var biblioteka = []
function _addbook(){
	libraryUpdate();
	var tytul = document.getElementById('Tytul').value;
	var autor = document.getElementById('Autor').value;
	var isbn = document.getElementById('ISBN').value;
	var ilosc = document.getElementById('Ilosc').value;
	if(tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0){
		alert("Uzupełni dane");
	}else{
		var ksiazka = {Tytuł: tytul, Autor: autor, ISBN: isbn, Ilość: ilosc};
		biblioteka.push(ksiazka)
		localStorage.setItem('books', JSON.stringify(biblioteka));
	
	}	
}

function toLibrary(){
	libraryUpdate();
	for(i = 0; i < biblioteka.length; i++){
		var n1 = biblioteka[i].Tytuł;
		var n2 = biblioteka[i].Autor
		var n3 = biblioteka[i].ISBN
		var whole = "Tytuł: " + n1 + " " + "Autor: " + n2 + " " + "ISBN: " + n3;
		var newH = document.createElement("P");
		newH.setAttribute("id", "H1_" + i);
		var newB0 = document.createElement("button");
		var newB1 = document.createElement("button");
		newB0.setAttribute("id", "Button0_" + i);
		newB1.setAttribute("id", "Button1_" + i);
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
function libraryUpdate(){
	var loadData = localStorage.getItem('books');
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
}

function saveEdit(x){
	localStorage.setItem("IDofBookEdited", x);
}

function approveEdit(){
	localStorage.removeItem("IDofBookEdited");
}