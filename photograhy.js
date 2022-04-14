var b1 = document.getElementById("portrait");
var b2 = document.getElementById("tree");
var b3 = document.getElementById("pumpkin");
var b4 = document.getElementById("hiring");
var b5 = document.getElementById("car");
var b6 = document.getElementById("fruit");
var b7 = document.getElementById("hand");
var b8 = document.getElementById("lights");
var b9 = document.getElementById("king");
var b10 = document.getElementById("shadow");
var image = document.getElementById("image");


function changePORT() {
	image.src = "Images/portrait(mood).jpg";
}
function changeTREE() {
	image.src = "Images/shadowtree(edit).jpg";
}
function changePUMP() {
	image.src = "Images/doubleexposure8.jpg";
}
function changeHIR() {
	image.src = "Images/socialchange-hiring.jpg";
}
function changeCAR() {
	image.src = "Images/doubleexposure5.jpg";
}
function changeFRU() {
	image.src = "Images/mirrorfruit(edit).jpg";
}
function changeHAND() {
	image.src = "Images/portrait(hand).jpg";
}
function changeLIGH() {
	image.src = "Images/Capture.png";
}
function changeKING() {
	image.src = "Images/doubleexposure10.jpg";
}
function changeSHAD() {
	image.src = "Images/linetreeshadows(edit).jpg";
}
b1.addEventListener("click", changePORT);
b2.addEventListener("click", changeTREE);
b3.addEventListener("click", changePUMP);
b4.addEventListener("click", changeHIR);
b5.addEventListener("click", changeCAR);
b6.addEventListener("click", changeFRU);
b7.addEventListener("click", changeHAND);
b8.addEventListener("click", changeLIGH);
b9.addEventListener("click", changeKING);
b10.addEventListener("click", changeSHAD);