var b1 = document.getElementById("portrait");
var b2 = document.getElementById("tree");
var b3 = document.getElementById("pumpkin");
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
b1.addEventListener("click", changePORT);
b2.addEventListener("click", changeTREE);
b3.addEventListener("click", changePUMP);