
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
		var newDiv = document.createElement("H1");
		var textnode = document.createTextNode(whole);
		var position = document.getElementById("Main")
		newDiv.appendChild(textnode);
		position.appendChild(newDiv);
	}
}
function libraryUpdate(){
	var loadData = localStorage.getItem('books');
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
}