var randomNumber1 = Math.floor(1+(Math.random())*6);
var randomImgDice = "images/dice"+randomNumber1+".png";
var dice1 = document.querySelctorAll("img1")[0];
dice1.setAttribute("src",randomImgDice);
alert("working!");
