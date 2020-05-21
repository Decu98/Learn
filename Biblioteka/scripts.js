
var biblioteka = []
function _addbook(){
	var loadData = localStorage.getItem('books');
	console.log(loadData);
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
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
		console.log(localStorage);
	
	}	
}