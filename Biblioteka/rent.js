
function rent_open() {
	updateStorage("book");
	var urlParams = new URLSearchParams(window.location.search)
	var getIdFromURL = urlParams.get("bookCode")
	document.getElementById("rent_title").innerHTML = "Tytuł: " + biblioteka[getIdFromURL].Tytuł;
	document.getElementById("rent_author").innerHTML = "Autor: " + biblioteka[getIdFromURL].Autor;
	document.getElementById("rent_isbn").innerHTML = "ISBN: " + biblioteka[getIdFromURL].ISBN;
	document.getElementById("rent_inlibrary").innerHTML = "Ilość w bibliotece: " + biblioteka[getIdFromURL].WBibliotece;
	document.getElementById("rent_rented").innerHTML = "Ilość wypożczonych: " + biblioteka[getIdFromURL].Wypozyczone;
}

function searchUser() {
	temp = [];
	updateStorage("user");
	var dataInputed = document.getElementById("searchforuser").value;
	for (i = 0; i < users.length; i++) {
		var objectToString = JSON.stringify(users[i]);
		var lookfor = objectToString.includes(dataInputed);
		if (lookfor == true) {
			var restart = JSON.parse(objectToString);
			temp.push(restart);
		}
	}
	showData(temp, "usersFound", "user", "rent");
}

function rentBook(bookID, userID) {
	updateStorage("book");
	var rentedBooks = users[userID].Rented
	var checkBooks = rentedBooks.includes(+bookID);
	var count = {
		Amout: biblioteka[bookID].Ilosc,
		In: biblioteka[bookID].WBibliotece,
		Out: biblioteka[bookID].Wypozyczone
	};
	if (checkBooks == true) {
		alert("Masz już tą książkę");
	}
	else if (count.Amout == count.In + count.Out && count.In > 0) {
		alert("Proszę");
		rentedBooks.push(bookID);
		localStorage.setItem("users", JSON.stringify(users));
		biblioteka[bookID].Wypozyczone = biblioteka[bookID].Wypozyczone + 1;
		biblioteka[bookID].WBibliotece = biblioteka[bookID].WBibliotece - 1;
		localStorage.setItem("books", JSON.stringify(biblioteka))
	}
	else {
		alert("Nie ma już książek");
	}
	rent_open();
}
