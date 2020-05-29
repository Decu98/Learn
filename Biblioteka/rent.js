
function rent_open(){
	libraryUpdate();
	var urlParams = new URLSearchParams(window.location.search)
	var getIdFromURL = urlParams.get("bookCode")
	document.getElementById("rent_title").innerHTML = "Tytuł: " + biblioteka[getIdFromURL].Tytuł;
	document.getElementById("rent_author").innerHTML = "Autor: " + biblioteka[getIdFromURL].Autor;
	document.getElementById("rent_isbn").innerHTML = "ISBN: " + biblioteka[getIdFromURL].ISBN;
	document.getElementById("rent_amout").innerHTML = "Ilość: " + biblioteka[getIdFromURL].Ilość;
}