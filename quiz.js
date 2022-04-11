var q1 = document.getElementById("q1");
var QR = document.getElementById("q1Result").innerHTML;
var QS = document.getElementById("Submit1")
function questionOne() {
	
	if (q1.value == "Unnumberable") {
	document.getElementById("q1Result").innerHTML = "CORRECT";
	}
	else  {
		QR.value = "INCORRECT";
	}
}
QS.addEventListener("click", questionOne);