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
	if (q1.value == "6 minutes"){
		result = result + 1;
	}
	if (q2.value == "Gideon Ofnier"){
		result = result + 1;
	}
	if (q3.value == "Mohgwyn palace"){
		result = result + 1;
	}
	if (q4.value == "Godrick soldier"){
		result = result + 1;
	}
	if (q5.value == "7"){
		result = result + 1;
	}
	if (q6.value == "Rot"){
		result = result + 1;
	}
	if (q7.value == "3"){
		result = result + 1;
	}
	if (q8.value == "Godwyhn"){
		result = result + 1;
	}
	if (q9.value == "Godskin Duo"){
		result = result + 1;
	}
	if (q10.value == "Elden Beast"){
		result = result + 1;
	}
	score.innerHTML = result;
}


Button.addEventListener("click", calculate)