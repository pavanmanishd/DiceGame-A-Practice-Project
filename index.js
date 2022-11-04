
var random1 = Math.floor((Math.random())*6+1);
var img1 = "./images/"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);

var random2 = Math.floor((Math.random())*6+1);
var img2 = "./images/"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);

if(random1>random2)
    document.querySelector("h1").textContent = "You Win!";
else if(random2>random1)
    document.querySelector("h1").textContent = "Computer Win";
else
    document.querySelector("h1").textContent = "It's a Draw"
