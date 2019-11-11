window.onkeydown = function () {
	highlight ();

};
//.operators for javaScript
function highlight() {
	document.getElementById("p1").style.backgroundColor = "#33333"
}
//order of functions does not matter as long as called correctly in html
//must link to html file
function changeFontFamily () {
	document.getElementById("p1").style.fontFamily = `monospace`;
}

function findReplace() {
	let txt = document.getElementById("find text").innerHTML;
							}
	let findword = document.getElementById("texFind").value;

	let findword = document.getElementById("texFind").value;

	//create new regex object. include the g and i modifyers for global and case insensitive
let re = new  regularExpresion(findword, "gi");

//find and replace words in original txt using created regex

let  newText = txt.replace(re, replaceWord);
//output new txt
document.getElementById("find-replace").innerHTML = newText;

addEventListener style.event.target.color = blue;

// this is supposed to find and re[place text
document.addEventListener("DomContentLoaded", function() {
	let btn = getElementById("change text");
	let btn.addEventListener("click", findReplace());
});

function findandReplace() {
	let string = document.getElementById("input").innerHTML;
	let findWord = document.getElementById("find").value;
	let replaceValue = document.getElementById("replace").value;
	let reg = new regExp(findWord, "gi");
	let newText = string.replace(reg, replaceValue);
document.getElementById("input").innerHTML = newText;
}