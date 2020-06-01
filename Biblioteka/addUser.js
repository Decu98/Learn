function addUser() {
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
}

