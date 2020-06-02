
function editElement(element) {
    switch (element) {
        case "book":
            updateStorage("book");
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
            alert("Zedytowano książkę");
            break;
        case "user":
            updateStorage("user");
            var getUser = localStorage.getItem("users");
            var userId = new URLSearchParams(window.location.search).get('userCode');
            var newName = document.getElementById("editName").value;
            var newSurname = document.getElementById("editSurname").value;
            var newPESEL = document.getElementById("editPESEL").value;
            var temporarySave = JSON.parse(getUser);
            temporarySave[userId].Imie = newName;
            temporarySave[userId].Nazwisko = newSurname;
            temporarySave[userId].PESEL = newPESEL;
            localStorage.setItem('users', JSON.stringify(temporarySave));
            alert("Zedytowano użytkownika");
            break;
        default:
            console.log("No type");
    }
}
