
function rent_open() {
	libraryUpdate();
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
	usersUpdate();
	var dataInputed = document.getElementById("searchforuser").value;
	for (i = 0; i < users.length; i++) {
		var objectToString = JSON.stringify(users[i]);
		var lookfor = objectToString.includes(dataInputed);
		if (lookfor == true) {
			var restart = JSON.parse(objectToString);
			temp.push(restart);
		}
	}
	showData(temp, "usersFound", "user");
}

