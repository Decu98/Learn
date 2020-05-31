function addUser() {
	var name = document.getElementById("Name").value;
	var surname = document.getElementById("Surname").value;
	var PESEL = document.getElementById("PESEL").value;
	var rentedBooks = [];
	if (name.length == 0 || surname.length == 0 || PESEL.length == 0) {
		alert("Uzupełni dane");
	} else {
		var user = { Imie: name, Nazwisko: surname, PESEL: PESEL, Id: userId(), Rented: rentedBooks }
		users.push(user);
		localStorage.setItem('users', JSON.stringify(users));
	}
}

function userId() {
	var userId_ = localStorage.getItem("userId");
	if (userId_ == null) {
		localStorage.setItem("userId", +userId_ + 1);
		return +userId_;
	} else {
		var x = +userId_ + 1;
		localStorage.setItem("userId", x);
		return +userId_;
	}
}
