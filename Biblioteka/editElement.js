
function editElement(element) {
    switch (element) {
        case "book":
            updateStorage("book");
            var bookID = new URLSearchParams(window.location.search).get('bookCode');
            var newTitle = document.getElementById("TitleEdit").value;
            var newAuthor = document.getElementById("AuthorEdit").value;
            var newCount = document.getElementById("CountEdit").value;
            library[bookID].Tytuł = newTitle;
            library[bookID].Autor = newAuthor;
            library[bookID].Ilosc = newCount;
            localStorage.setItem('books', JSON.stringify(library));
            alert("Zedytowano książkę");
            break;
        case "user":
            updateStorage("user");
            var userId = new URLSearchParams(window.location.search).get('userCode');
            var newName = document.getElementById("editName").value;
            var newSurname = document.getElementById("editSurname").value;
            var newPESEL = document.getElementById("editPESEL").value;
            library[userId].Imie = newName;
            library[userId].Nazwisko = newSurname;
            library[userId].PESEL = newPESEL;
            localStorage.setItem('users', JSON.stringify(library));
            alert("Zedytowano użytkownika");
            break;
        default:
            console.log("No type");
    }
}
