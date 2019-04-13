
function chapter61() {
  var c = document.body.childNodes;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].nodeType + "<br>";
  }

  document.getElementById("demo").innerHTML = txt;
}
function chapter62() {
  var list = document.getElementById("chapter62list").firstChild.innerHTML;
  document.getElementById("demo1").innerHTML = list;
}

function chapter63() {
  var x = document.getElementById("myP").tagName;
  document.getElementById("demo63").innerHTML = x;
}

function chapter64() {
  var c = document.getElementById("chapter64div").childElementCount;
  document.getElementById("demo64").innerHTML = c;
}

function chapter65() {
  var div = document.getElementById("chapter65div");
  var tagclass = document.getElementById("h1id").className;
  document.getElementById("demo65").innerHTML=tagclass;
}


function chapter66() {
  document.getElementById("ul66").childNodes[0].innerHTML="<li>Torte!</li>";
}

function chapter67() {
	var node = document.createElement("P");                    
	var textnode = document.createTextNode("Pie");        
	node.appendChild(textnode);                                
	document.getElementById("chapter67div").appendChild(node); 
}
function chapter68() {
	var newItem = document.createElement("P");       
	var textnode = document.createTextNode("Pie");  
	newItem.appendChild(textnode);                    

	var list = document.getElementById("chapter68div");    
	list.insertBefore(newItem, list.childNodes[1]);  
}
function chapter69() {
	var plan1 = {
	  name: "Subscriptions",
	  price: 199.99,
	  months: 12,
	}
	alert("The cost of the " + plan1.name + " package is $" + plan1.price + " for " + plan1.months + " months"); 
}

function chapter70() {
var person = {
  firstname:"Rebecca",
  lastname:"Leo",
  haircolor: "red",
  eyecolor:"green"
};

person.nationality = "American";
document.getElementById.innerHTML = "";
alert(person.firstname + " is " + person.nationality + ".");
}
