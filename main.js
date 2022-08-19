import './index.css'
import {changeColor,changeText, changeSize, instruction, closeInstruction, openSave, closeSave } from './functions.js'

let red = document.getElementById("FE4A49");
red.onclick = function(e) {
  changeColor(e.target.id)
}

let cyan = document.getElementById("2AB7CA");
cyan.onclick = function(e) {
  changeColor(e.target.id)
}
let yellow = document.getElementById("FED766");
yellow.onclick = function(e) {
  changeColor(e.target.id)
}
let gray = document.getElementById("E6E6EA");
gray.onclick = function(e) {
  changeColor(e.target.id)
}

let white = document.getElementById("F4F4F8");
white.onclick = function(e) {
  changeColor(e.target.id)
}

let element = document.getElementById("text-input");
element.onchange = function(event) {
  changeText(event.target.value)
}

let size = document.getElementById("size-input");
size.onchange = function(event) {
  changeSize(event.target.value)
}

let instructions = document.getElementById("btn-instruction");
instructions.onclick = function() {
  instruction()
}

let closeInstructions = document.getElementById("close-instruction");
closeInstructions.onclick = function() {
  closeInstruction()
}

let save = document.getElementById("btn-save");
save.onclick = function() {
  openSave()
}

let closingSave = document.getElementById("close-save-modal");
closingSave.onclick = function() {
  closeSave()
}
