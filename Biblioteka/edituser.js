function editUser(){
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
}
