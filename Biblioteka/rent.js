
function rent_open(){
	libraryUpdate();
	var getID = localStorage.getItem("IDofBookEdited");
	var IDtransfer = Number(getID.split("_").pop());
	document.getElementById("rent_title").innerHTML = "Tytuł: " + biblioteka[IDtransfer].Tytuł;
	document.getElementById("rent_author").innerHTML = "Autor: " + biblioteka[IDtransfer].Autor;
	document.getElementById("rent_isbn").innerHTML = "ISBN: " + biblioteka[IDtransfer].ISBN;
	document.getElementById("rent_amout").innerHTML = "Ilość: " + biblioteka[IDtransfer].Ilość;
}