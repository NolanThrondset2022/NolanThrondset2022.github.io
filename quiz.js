var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var Button = document.getElementById("Submit");
var score = document.getElementById("score");
var result = 0;
function calculate() {
	result = 0;
	if (q1.value == "Let Me Solo Her"){
		result = result + 1;
	}
	if (q2.value == "Irina and Hyetta"){
		result = result + 1;
	}
	if (q3.value == "The Crucible Knights"){
		result = result + 1;
	}
	if (q4.value == "Malenia"){
		result = result + 1;
	}
	if (q5.value == "Black Knife Tiche"){
		result = result + 1;
	}
	if (q6.value == "Leonard"){
		result = result + 1;
	}
	if (q7.value == "Miquella's Needle"){
		result = result + 1;
	}
	if (q8.value == "Godwyn"){
		result = result + 1;
	}
	if (q9.value == "Marika the Eternal"){
		result = result + 1;
	}
	if (q10.value == "120"){
		result = result + 1;
	}
	score.innerHTML = result;
}


Button.addEventListener("click", calculate)