
function toLibrary(){
	libraryUpdate();
	showResults(biblioteka);
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function searchFor(){
	temp = [];
	libraryUpdate();
	var getText = document.getElementById("Szukaj").value;
	for(i = 0; i < biblioteka.length; i++){
		var objectToString = JSON.stringify(biblioteka[i]);
		var matchText = objectToString.includes(getText);
		if(matchText == true){
			var restart = JSON.parse(objectToString);
			temp.push(restart);
		}
	}
	showResults(temp);
}