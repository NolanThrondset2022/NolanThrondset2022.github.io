var Lib1;
var Lib2;
var Lib3;
var Lib4;
var Lib5;
var Lib6;
var Lib7;
var Lib8;
var Lib9;
var Lib10;

function MAD() {
	Lib1 = document.getElementById("silly word1").value;
	Lib2 = document.getElementById("last name").value;
	Lib3 = document.getElementById("illness").value;
	Lib4 = document.getElementById("noun").value;
	Lib5 = document.getElementById("adjective1").value;
	Lib6 = document.getElementById("adjective2").value;
	Lib7 = document.getElementById("silly word2").value;
	Lib8 = document.getElementById("place").value;
	Lib9 = document.getElementById("number").value;
	Lib10 = document.getElementById("adjective3").value;
	
	document.getElementById("Sentence").innerHTML = "Dear School " + Lib1 + ": " + Lib2 + " will not be attending school today. He/she has come down with a case of " + Lib3 + " and has horrible " + Lib4 + " and a/an " + Lib5 + " fever. We have made an appointment with the " + Lib6 + " Dr. " + Lib7 + ", who studied for many years in " + Lib8 + " and has " + Lib9 + "degrees in pediatrics. He will send you all the information you need. Thank you! Sincerely Mrs. " + Lib10;
	
}
document.getElementById("SUB").addEventListener("click", MAD);