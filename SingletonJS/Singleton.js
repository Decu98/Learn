function Click(singleton) {
    var instance = new function () {
        this.start = 0;
        this.new = function () {
            alert(this.start)
        };
    }
    instance.start = singleton;
    instance.new();
}

function getValue(){
    var inputVal = document.getElementById("SingletonInput").value;
    Click(inputVal); 
}
