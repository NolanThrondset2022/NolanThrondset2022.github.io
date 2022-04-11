
function password() {
	
	if (document.getElementById("password").value == "Long John") {
	document.getElementById("password").style.backgroundColor = "lightgreen"
	document.getElementById("acc").innerHTML = "ACCESS GRANTED"
	window.location = "index.html";
	}
	else if (document.getElementById("password").value != "Long John") {
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("acc").innerHTML = "ACCESS DENIED"
	}
}
document.getElementById("passBut").addEventListener("click", password);