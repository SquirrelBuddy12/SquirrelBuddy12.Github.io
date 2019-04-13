function checkDivision(iCounter, divisor) {
	return iCounter % divisor === 0;
}
function isEmpty(string) {
    return (!string || 0 === string.length);
}

function alert2(message)
{
	document.getElementById("AlertSpan").innerHTML = "<b><font color='red'>"+message+"</font></b>";
}
function myFunction() {
	var fname = document.getElementById('fname').value
	var mname = document.getElementById('mname').value
	var lname = document.getElementById('lname').value
	var name = fname + " " + mname + " " + lname
	
	if(isEmpty(fname)) {alert2("Please enter a first name."); return;}
	if(isEmpty(mname)) {alert2("Please enter a middle name."); return;}
	if(isEmpty(lname)) {alert2("Please enter a last name."); return;}
	
	if (name=="")
	{
		document.getElementById('welcome_message').innerHTML = "Welcome to Oodles of Yum!";
	}
	else
	{
		document.getElementById('welcome_message').innerHTML = "Welcome " + name + " to Oodles of Yum!";
	
	}

	var i;
	sum = 1;
	var output = "";
	var firstDivisor = parseInt(document.getElementById("num1").value); 
	var secondDivisor = parseInt(document.getElementById("num2").value);
	var thirdDivisor = parseInt(document.getElementById("num3").value);

	if(isEmpty(firstDivisor)) {alert2("Please enter a first divisor.");return;}
	if(isEmpty(secondDivisor)) {alert2("Please enter a second divisor.");return;}
	if(isEmpty(thirdDivisor)) {alert2("Please enter a third divisor.");return;}
	
	var firstKeyword = document.getElementById("kw1").value;
	var secondKeyword = document.getElementById("kw2").value;
	var thirdKeyword = document.getElementById("kw3").value;

	if(isEmpty(firstKeyword)) {alert2("Please enter a first keyword.");return;}
	if(isEmpty(secondKeyword)) {alert2("Please enter a second keyword.");return;}
	if(isEmpty(thirdKeyword)) {alert2("Please enter a third keyword.");return;}

	var defaultKeyword = document.getElementById("defaultKeyword").value;
	var totalNumber = parseInt(document.getElementById("totalNumber").value);
	if(isEmpty(defaultKeyword)) {alert2("Please enter a default keyword.");return;}
	if(isEmpty(totalNumber)) {alert2("Please enter a total number.");return;}

	alert2("Success!");

	output = output + "<table style='display: inline-block;'>";
	for (i = 1; i <= totalNumber; i = i+1){
		
		var keyword = "";
		var keyword = "";
		
		if (checkDivision(i,firstDivisor)){
			keyword += firstKeyword;
		}
		
		if (checkDivision(i, secondDivisor)){
			keyword += secondKeyword;
		}

		if (checkDivision(i, thirdDivisor)){
			keyword += thirdKeyword;
		}
		

		if(keyword == "") {
			keyword = defaultKeyword;
		}
		

		output = output +"<tr><td>"+ i + "&nbsp;&nbsp;</td><td align=\"left\" style=\"text-align: left\">" + keyword + "</td></tr>";

	}
	output = output + "</table>"
	document.getElementById("demo").innerHTML = output;
}
