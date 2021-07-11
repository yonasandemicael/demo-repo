function myFunction() {
  var text;
  var fruits = document.getElementById("myInput").value;

  switch(fruits)
   {
    case "Banana":
      text = "Banana is good!";
    break;
    case "Orange":
    text = "I am not a fan of orange.";
    break;
    case "Apple":
    text = "How you like them apples?";
    break;
    default:
    text = "I have never heard of that fruit...";
  }
}
// Switch
let age = 20 ;
switch(age)
{
  case age <= 12 :
    console.log("You are a child ");
    break;
  case age <= 18 :
  console.log("You are teenager");
  break;
  case age > 18:
  console.log("you are getting old");
  break;
  default:
    console.log("You did not enter age.");
}



