function bakery() {
	var longParagraph = "We are glad you have arrived at Oodles of Yum. We have all kinds of cakes, cookies and pies to fulfill your sweetest desires.";
	document.getElementById("concept").innerHTML = longParagraph;
}
function makeInvisible() {
	document.getElementById("me").className = "hidden";
}
function swapPic(eId, newPic) {
	document.getElementbyID(eId).src = newPic;
}