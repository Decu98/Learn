
var biblioteka = [];
var temp = [];

function libraryUpdate(){
	var loadData = localStorage.getItem('books');
	if(loadData !== null){
		biblioteka = JSON.parse(loadData);
	}
}

function clearID(){
	localStorage.removeItem("IDofBookEdited");
}













