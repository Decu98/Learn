
function approveEdit(){
	libraryUpdate();
	var getBooks = localStorage.getItem("books");
	var bookID = new URLSearchParams(window.location.search).get('bookCode');
	var newTitle = document.getElementById("TitleEdit").value;
	var newAuthor = document.getElementById("AuthorEdit").value;
	var newCount = document.getElementById("CountEdit").value;
	var temporarySave = JSON.parse(getBooks);
	temporarySave[bookID].Tytuł = newTitle;
	temporarySave[bookID].Autor = newAuthor;
	temporarySave[bookID].Ilosc = newCount;
	localStorage.setItem('books', JSON.stringify(temporarySave));
	localStorage.removeItem("IDofBookEdited");
}
