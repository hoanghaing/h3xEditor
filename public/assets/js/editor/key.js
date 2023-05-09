import * as actionManager from '../action/action.js'
document.addEventListener("contextmenu", (event) => {
    if (event.code === 'F10') return false
});

document.addEventListener('keydown', function(event){
    event.preventDefault()
    actionManager.execute({ action: 'key', type: event.code })
})