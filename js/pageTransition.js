function transitionOut(panel){

  let currElement = document.getElementsByTagName("BODY")[0];

  currElement.className = "animated slideOutLeft";

  currElement.addEventListener('animationend', function (){
    window.location.href = panel;
  });
}
