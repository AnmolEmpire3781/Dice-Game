var randomNumber=Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber + ".png";

var randomDiceSrc = "./images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceSrc);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDicesrc2 = "./images/dice"+ randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDicesrc2);

if(randomNumber > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    
    }
    else if (randomNumber2>randomNumber)
    {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else
    {
        document.querySelector("h1").innerHTML = " Draw";
    }