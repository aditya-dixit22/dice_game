const images = ["dice1","dice2","dice3","dice4","dice5","dice6",];
var p1,p2;
var winner;


p1 =Math.floor(6*Math.random());
p2 =Math.floor(6*Math.random());

var f = sessionStorage.getItem("flag");
document.onload = setFlag();

if(f=="true"){

  document.querySelector(".img1").setAttribute("src","images/"+images[p1]+".png");
  document.querySelector(".img2").setAttribute("src","images/"+images[p2]+".png");
  if(p1>p2){
    winner="🚩 Player 1 wins!";
  }
  else if (p2>p1) {
    winner="Player 2 wins! 🚩";
  }
  else{
    winner="Match Draw";
  }
  document.querySelector("h1").textContent=winner;
}


function setFlag(){

  sessionStorage.setItem("flag", "true");
}
