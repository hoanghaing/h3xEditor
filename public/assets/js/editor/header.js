import * as actionManager from '../action/action.js'
var options = document.getElementsByClassName("option")
document.addEventListener("DOMContentLoaded", function() {
  initOptionsEvent()
});

function initOptionsEvent() {
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', optionEventListener, false)
  }
}
function optionEventListener() {
  const { action, type } = this.dataset
  actionManager.execute({ action, type })
}