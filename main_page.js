name = localStorage.getItem("Name");
document.getElementById("p1").innerHTML = "<label id= 'name'> Welcome " + name + "!";  ;
document.getElementById("p1").style.color = "black";

pic = localStorage.getItem("Display Pic");
document.getElementById("dp").src = pic;

