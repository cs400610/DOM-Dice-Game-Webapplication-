let randomNumber1 = Math.floor(Math.random() * 6 + 1); 

let diceImage = "dice"+randomNumber1+".png";  
let randomImageSource = "./images/"+diceImage;

let dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1); 

let diceImage1 = "dice"+randomNumber2+".png";  
let randomImageSource1 = "./images/"+diceImage1;


let dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomImageSource1);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="a Big TIE!!";
} 
else {
    document.querySelector("h1").innerHTML="Player 2 Wins";
}


