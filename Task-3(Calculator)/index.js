function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        var p = document.getElementById("result").value;
        var q = eval(p);
        if (q === undefined || isNaN(q)) {
            throw new Error("Invalid Calculation");
        }
        document.getElementById("result").value = q;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
