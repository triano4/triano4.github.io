export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

export function changeColor(color){
  document.querySelector("#generated-text").style.color = '#'+color
  let elem = document.getElementById("text-colors").getElementsByTagName("button")
  for(let i =0; i < elem.length;i++){
    elem[i].style.borderColor = "white";
  }
  document.getElementById(color).style.borderColor = "olivedrab";
}

export function changeText(text){
let elem = document.querySelector('#generated-text');
elem.innerHTML = text;
}

export function changeSize(size){
  document.querySelector('#generated-text').style.fontSize = size+"px"
  let element = document.querySelector('#size-text')
  element.innerHTML = size+"px";
}

export function instruction(){
  var element = document.getElementById("instruction-modal");
  element.classList.add("translate-y-[182%]");
}

export function closeInstruction(){
  var element = document.getElementById("instruction-modal");
  element.classList.remove("translate-y-[182%]"); 
}

export function openSave(){
  var element = document.getElementById("save-modal");
  element.classList.add("translate-y-[182%]");
  element.classList.remove("top-[-30%]");
  element.classList.add("top-[30%]");
}

export function closeSave(){
  var element = document.getElementById("save-modal");
  element.classList.remove("translate-y-[182%]"); 
  element.classList.remove("top-[30%]");
  element.classList.add("top-[-30%]");
}