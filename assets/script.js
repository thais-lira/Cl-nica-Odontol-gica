
function myFunction() {
  var x = document.getElementById("navigation--topnav");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}