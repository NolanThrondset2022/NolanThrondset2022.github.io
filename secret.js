var enteredPass;



function password() {
	enteredPass = document.getElementById("password").value;
	if (document.getElementById("password").value == "Long John") {
	document.getElementById("password").style.backgroundColor = "lightgreen";
	document.getElementById("was").innerHTML = "ACCESS GRANTED";
	window.location = "index.html";
	}
	else if (document.getElementById("password").value != "Long John") {
		document.getElementById("password").style.backgroundColor = "Red";
		document.getElementById("was").innerHTML = "The password " + enteredPass + " was wrong";
	}
}
document.getElementById("passBut").addEventListener("click", password);