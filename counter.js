var count = 0;

function divideTen() {
	count = count / 10;
	document.getElementById("counter").innerHTML = count;
}

function divideTwo() {
	count = count / 2;
	document.getElementById("counter").innerHTML = count;
}
function minusFive() {
	count = count - 5;
	document.getElementById("counter").innerHTML = count;
}

function minus() {
	count = count - 1;
	document.getElementById("counter").innerHTML = count;
}

function plus() {
	count = count + 1;
	document.getElementById("counter").innerHTML = count;
}
function plusFive() {
	count = count + 5;
	document.getElementById("counter").innerHTML = count;
}
function timesTwo() {
	count = count * 2;
	document.getElementById("counter").innerHTML = count;
}
function timesTen() {
	count = count * 10;
	document.getElementById("counter").innerHTML = count;
}
document.getElementById("Minus").addEventListener("click", minus);
document.getElementById("Plus").addEventListener("click", plus);
document.getElementById("PlusFive").addEventListener("click", plusFive);
document.getElementById("MinusFive").addEventListener("click", minusFive);
document.getElementById("DividedTwo").addEventListener("click", divideTwo);
document.getElementById("DividedTen").addEventListener("click", divideTen);
document.getElementById("TimesTwo").addEventListener("click", timesTwo);
document.getElementById("TimesTen").addEventListener("click", timesTen);