// const element = document.querySelector('body');

// element.addEventListener("keypress", function(event) {
//   if (event.key === "w" || event.key === "W") {keyboardPress('w');}
//   if (event.key === "a" || event.key === "A") {keyboardPress('a');}
//   if (event.key === "s" || event.key === "S") {keyboardPress('s');}
//   if (event.key === "d" || event.key === "D") {keyboardPress('d');}
//   if (event.key === "j" || event.key === "J") {keyboardPress('j');}
//   if (event.key === "k" || event.key === "K") {keyboardPress('k');}
//   if (event.key === "l" || event.key === "L") {keyboardPress('l');}
// });

function keyboardPress(key){
  document.querySelector(`.${key}`).classList.add("activeKey");
  setTimeout(() => {
  document.querySelector(`.${key}`).classList.remove("activeKey");
  }, 200);
}

var buttons=document.querySelectorAll("li").length;
for(var i=0;i<buttons;i++)
{
  document.querySelectorAll("li")[i].addEventListener("click",function()
  {
    var htmlvalue=this.innerHTML;
    makeSound(htmlvalue);
  }
  )
}

document.addEventListener("keypress",function(event){
      makeSound(event.key);
})

function makeSound(key)
{
  var beat;
  switch(key){
    case "w": beat = new Audio("sounds/tom-1.mp3"); break;
    case "a": beat = new Audio("sounds/tom-2.mp3"); break;
    case "s": beat = new Audio("sounds/tom-3.mp3"); break;
    case "d": beat = new Audio("sounds/tom-4.mp3"); break;  
    case "j": beat = new Audio("sounds/crash.mp3"); break;
    case "k": beat = new Audio("sounds/kick-bass.mp3"); break;
    case "l": beat = new Audio("sounds/snare.mp3"); break;
  }
  keyboardPress(key);
  beat.play();
}