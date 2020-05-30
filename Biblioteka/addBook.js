
function addBook(){
	libraryUpdate();
	var tytul = document.getElementById('Tytul').value;
	var autor = document.getElementById('Autor').value;
	var isbn = document.getElementById('ISBN').value;
	var ilosc = document.getElementById('Ilosc').value;
	if(tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0){
		alert("Uzupełni dane");
	}else{
		var ksiazka = {Tytuł: tytul, Autor: autor, ISBN: isbn, Ilosc: ilosc, BookId_: setBookIdOfBook()};
		biblioteka.push(ksiazka)
		localStorage.setItem('books', JSON.stringify(biblioteka));
	
	}	
}

function setBookIdOfBook(){
	var BookId_ = localStorage.getItem("BookId");
	if(BookId_ == null){
		localStorage.setItem("BookId", +BookId_ + 1);
		return +BookId_;
	}else{
		var x = +BookId_ + 1;
		localStorage.setItem("BookId", x);
		return +BookId_	;
	}
}
