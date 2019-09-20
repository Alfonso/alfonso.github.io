
var currPanel = "Profile";
var panels = ["Profile","About","Rutgers","Work","Projects","HackRU","ChiPhi"];

function forwardTransition(newPanel){
  let oldP = panels.indexOf(currPanel);
  let newP = panels.indexOf(newPanel);
  if(oldP < newP)
    return true;
  return false;
}

function transitionOut(newPanel){

  if(newPanel == currPanel)
    return;

  let currElement = document.getElementById(currPanel);
  let out = "";
  if(forwardTransition(newPanel)){
    out = "Left";
  }else{
    out = "Right";
  }

  currElement.className = "animated slideOut"+out;

  console.log("test");

  currElement.addEventListener('animationend', transitionIn(newPanel,out));
}

function transitionIn(newPanel,outTransition){

  document.getElementById(currPanel).removeEventListener('animationend',transitionIn);

  let inTransition = "";

  if(outTransition == "Right"){
    inTransition= "Left";
  }else if(outTransition == "Left"){
    inTransition= "Right";
  }

  let currElement = document.getElementById(currPanel);
  currElement.style.display = "none";

  let newElement = document.getElementById(newPanel);
  console.log("current: "+currPanel);
  newElement.style.display = "block"
  newElement.className = "animated slideIn" + inTransition;
  currPanel = newPanel;

}
