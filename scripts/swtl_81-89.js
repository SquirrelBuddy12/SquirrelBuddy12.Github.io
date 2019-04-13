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
  var numChars = document.getElementById("zipcode").value.length;
    if (numChars < 5) {
		alert("Please enter a 5-digit code.");
		return false;
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
	try {
		add("Welcome guest!");
	}
	catch(err) 
	{
		document.getElementById("demo87").innerHTML = err.message;
	}
}

function chapter88() {
  var message, x;
  x = document.getElementById("demo88").value;
  message = document.getElementById("p01");
  message.innerHTML = "";
  try { 
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

function chapter89() {
	alert("Hi There!");
}
		
