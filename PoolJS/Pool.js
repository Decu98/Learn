function Uno() {
    var instance = new function () {
        this.start = 0;
        this.new = function () {
            alert(this.start)
        };
    }
    instance.start = 1;
    instance.new();
}

function Dos(){
    var instance = new function () {
        this.start = 0;
        this.new = function () {
            alert(this.start);
        };
    }
    instance.start = 2;
    instance.new();
}

function Tres(){
    var instance = new function () {
        this.start = 0;
        this.new = function () {
            alert(this.start);
        };
    }
    instance.start = 3;
    instance.new();
}

function getValue(){
    var inputVal = document.getElementById("SingletonInput").value;
    
    switch(Number(inputVal)) {
        case 1:
            Uno();
            break;
        case 2:
            Dos();
            break;
        case 3:
            Tres();
            break;
        default:
            alert("Wpisz jedną z 3 liczb");
    }
}
