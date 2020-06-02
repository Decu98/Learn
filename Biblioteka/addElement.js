function addElement(element) {
	switch (element) {
		case "book":
			updateStorage("book");
			var tytul = document.getElementById('Tytul').value;
			var autor = document.getElementById('Autor').value;
			var isbn = document.getElementById('ISBN').value;
			var ilosc = +document.getElementById('Ilosc').value;
			if (tytul.length == 0 || autor.length == 0 || isbn.length == 0 || ilosc.length == 0) {
				alert("Uzupełni dane");
			} else {
				var book = { Tytuł: tytul, Autor: autor, ISBN: isbn, Ilosc: ilosc, WBibliotece: ilosc, Wypozyczone: 0, BookId_: setId("book") };
				library.push(book)
				localStorage.setItem('books', JSON.stringify(library));

			}
			alert("Dodano książkę");
			break;
		case "user":
			updateStorage("user");
			var name = document.getElementById("Name").value;
			var surname = document.getElementById("Surname").value;
			var PESEL = document.getElementById("PESEL").value;
			var rentedBooks = [];
			if (name.length == 0 || surname.length == 0 || PESEL.length == 0) {
				alert("Uzupełni dane");
			} else {
				var user = { Imie: name, Nazwisko: surname, PESEL: PESEL, Id: setId("user"), Rented: rentedBooks }
				users.push(user);
				localStorage.setItem('users', JSON.stringify(users));
			}
			alert("Dodano użytkownika");
			break;
		default:
			console.log("No type");
	}
}