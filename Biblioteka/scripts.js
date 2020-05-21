

var biblioteka = [];
var IdOfBook = 1;
function _addbook(){
	var currentlibrery = sessionStorage.getItem('biblioteka')
	biblioteka = currentlibrery;
	var tytul = document.getElementById('Tytul').value;
	var autor = document.getElementById('Autor').value;
	var isbn = document.getElementById('ISBN').value;
	var ilosc = document.getElementById('Ilosc').value;
	if(tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0){
		alert("Uzupełni dane");
	}
	var ksiazka = {Tytuł: tytul, Autor: autor, ISBN: isbn, Ilość: ilosc, ID: IdOfBook};
	biblioteka.push(ksiazka);
	IdOfBook = IdOfBook + 1;
	sessionStorage.setItem('biblioteka','biblioteka');
	console.log("Działa");
	console.log(biblioteka);
}