// window.onkeydown = function () {
// 	highlight ();
//
// };
// //.operators for javaScript
// function highlight() {
// 	document.getElementById("p1").style.backgroundColor = "#33333"
// }
// //order of functions does not matter as long as called correctly in html
// //must link to html file
// function changeFontFamily () {
// 	document.getElementById("p1").style.fontFamily = `monospace`;
// }
//
// function findReplace() {
// 	let txt = document.getElementById("find text").innerHTML;
// 							}
// 	let findword = document.getElementById("texFind").value;
//
// 	let findword = document.getElementById("texFind").value;
//
// 	//create new regex object. include the g and i modifyers for global and case insensitive
// let re = new  regularExpresion(findword, "gi");
//
// //find and replace words in original txt using created regex
//
// let  newText = txt.replace(re, replaceWord);
// //output new txt
// document.getElementById("find-replace").innerHTML = newText;
//
// addEventListener style.event.target.color = blue;
//
// // this is supposed to find and re[place text
// document.addEventListener("DomContentLoaded", function() {
// 	let btn = getElementById("change text");
// 	let btn.addEventListener("click", findReplace());
// });
//
// function findandReplace() {
// 	let string = document.getElementById("input").innerHTML;
// 	let findWord = document.getElementById("find").value;
// 	let replaceValue = document.getElementById("replace").value;
// 	let reg = new regExp(findWord, "gi");
// 	let newText = string.replace(reg, replaceValue);
// document.getElementById("input").innerHTML = newText;
// }

/**
 *rot 13
 */

function rot13() {
	//alphabet array
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//rot13 array
	let alphabetRot13 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

	let text = document.getElementById("rot13").textContent;

	let rot13Text = "";

	for(let i = 0; i < text.length; i++) {

		for(let j = 0; j < alphabet.length; j++) {

			if(text[i] === alphabet[j]) {

				rot13Text = rot13Text + alphabetRot13[j];
			}
		}
		if(text[i] === " ") {
			rot13Text = rot13Text + " ";
		}
	}

	document.getElementById("rot13").textContent = rot13Text;
}





window.onkeydown = function (){
	highlight();
};

function highlight() {
	document.getElementById("highlight").style.backgroundColor = '#fdff32';
};