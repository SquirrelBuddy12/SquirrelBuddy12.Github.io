function chapter81() {
	var testPop = window.open("", "", "width=100,height=100");
	if (testPop === null || typeof(testPop) === "undefined") {
		alert("Please disable your popup blocker.");
	}
	testPop.close();
}


function chapter82() {
	if(document.getElementById("lastNameField").value.length === 0)
	{
		alert("Please enter your last name");
		return false;
	}
	else
	{
		return true;
	}
	
}

function chapter83() {
	if (document.getElementById("cakes").selectedIndex === 0)
	{
		alert("Please select a cake.");
		return false;
	}
}

function chapter84() {
	var radios = document.getElementsByName("rl");
	for (var i = 0; i < radios.length; i ++) {
		if (radios[i].checked) {
			return true;
		}
	}
    alert("Please check one.");
    return false;
}


function chapter85() {
 
var valueEntered = document.getElementById("zip").value;
var numChars = valueEntered.length;
if (numChars < 5) {
alert("Please enter a 5-digit code.");
return false;
}
for (var i = 0; i <= 4; i++) {
var thisChar = parseInt(valueEntered[i]);
if (isNaN(thisChar)) {
alert("Please enter only numbers.");
return false;
  }
 }
}


function chapter86() {
	var addressIsLegal = true;
	var eEntered = document.getElementById("email").value;
	if (eEntered.indexOf(" ") !== -1) {
		addressIsLegal = false;
	}
	if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
		addressIsLegal = false;
	}
	if (addressIsLegal === false) {
		alert("Please correct email address");
		return false;
	}
}

function chapter87() {
	function greetWorld() {
 try {
 var greeting = "Hello world!";
aler(greeting);
}
 catch(err) {
 alert(err);
 }
 }


function chapter88() {
  
try {
var pass = document.getElementById("f1").value;
if (pass.length < 8) {
throw "Please enter at least 8 characters.";
}
if (pass.indexOf(" ") !== -1) {
throw "No spaces in the password, please.";
}
var numberSomewhere = false;
for (var i = 0; i < pass.length; i++) {
if (isNaN(pass(i, i+1)) === false) {
numberSomewhere = true;
break;
}
}
if (numberSomewhere === false) {
throw "Include at least 1 number.";
 }
}
catch(err) {
alert(err);
}

function chapter89() {
var b1 = document.getElementById("button1");
b1.onclick = sayHello;
}
		
