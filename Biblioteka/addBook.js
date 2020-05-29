
function _addbook(){
	libraryUpdate();
	var tytul = document.getElementById('Tytul').value;
	var autor = document.getElementById('Autor').value;
	var isbn = document.getElementById('ISBN').value;
	var ilosc = document.getElementById('Ilosc').value;
	if(tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0){
		alert("Uzupełni dane");
	}else{
		var ksiazka = {Tytuł: tytul, Autor: autor, ISBN: isbn, Ilość: ilosc, ID_: setIdOfBook()};
		biblioteka.push(ksiazka)
		localStorage.setItem('books', JSON.stringify(biblioteka));
	
	}	
}

function setIdOfBook(){
	var id_ = localStorage.getItem("ID");
	if(id_ == undefined){
		localStorage.setItem("ID", 0);
		return id_;
		var x = id_ + 1;
		localStorage.setItem("ID", x);
	}else{
		var x = +id_ + 1;
		localStorage.setItem("ID", x);
		return id_	
	}
}
