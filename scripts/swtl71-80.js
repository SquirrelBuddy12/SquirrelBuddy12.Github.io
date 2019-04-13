function chapter71() 
{
	alert("The price for a year of pies is: $" + plan1.yearPrice());
}

var plan1 = {
	name: "Subscription",
	kind: "pie",
	monthPrice: 20.0,
	discountPercent: .8,
	discountMonths: [6,7],
	yearPrice: function()
	{
		var result = 0.0;
		for (var i = 0; i <= 11; i++) {
			var month = i+1;
			if (this.discountMonths.includes(month))
			{
				result = result + this.monthPrice * this.discountPercent;
			}
			else
			{
				result = result + this.monthPrice;				
			}
		}
		return result;
	}		
};

function chapter72() {
	
	var plan2 = new Plan("Plan2","pie","Blueberry",15.00);
	alert("This " + plan2.flavor + " " + plan2.kind + " is $" + plan2.price + " per month!");
}

function Plan(name,kind,flavor,price)
{
	this.name = name;
	this.kind = kind;
	this.flavor = flavor;
	this.price = price;
}	

function chapter73() {
	// Display age
	alert("My chef is " + myChef.age + ".");
}

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myChef = new Person("John", "Doe", 50, "blue");

function chapter74() {
	alert("My chef is " + myChef.age + ".  My baker is " + myBaker.age + "."); 	
}

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myChef = new Person("John", "Doe", 50, "blue");
var myBaker = new Person("Sally", "Rally", 30, "green");

function chapter75() {
	alert("My father is " + person.name()); 
}

var person = {
  firstName: "John",
  lastName : "Lee",
  id     : 5566,
};
person.name = function() {
  return this.firstName + " " + this.lastName;
};

function chapter76()
{
	alert("The URL for this page is: " + window.location.href);
	alert("Click ok to change the page url.");
	window.location.href="https://food52.com/";
}

function chapter77()
{
	alert("The URL for this page is: " + window.location.href);
	alert("Click ok to change the page url.");
	window.location.assign("https://www.loveandlemons.com/");
}

function chapter78forward()
{
  window.history.forward()
}

function chapter78backward()
{
  window.history.back()
}

function chapter79()
{
	var catWindow = window.open("http://jsforcats.com/");
}

function chapter80()
{
	var foodWindow = window.open("https://sallysbakingaddiction.com/", "","width=420, height=380, top=0, left=0");
	"https://www.davidlebovitz.com/"
	var foodWindow2 = window.open("https://www.davidlebovitz.com/", "","width=420, height=380, top=0, left=0");
	
}