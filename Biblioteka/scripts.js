
var biblioteka = [];
var users = [];
var temp = [];

function libraryUpdate() {
	var loadData = localStorage.getItem('books');
	if (loadData !== null) {
		biblioteka = JSON.parse(loadData);
	}
}

function clearID() {
	localStorage.removeItem("IDofBookEdited");
}

function usersUpdate() {
	var loadData = localStorage.getItem("users");
	if (loadData !== null) {
		users = JSON.parse(loadData);
	}

}













