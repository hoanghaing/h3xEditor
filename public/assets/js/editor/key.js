document.addEventListener("contextmenu", (event) => {
    if (event.code === 'F10') return false
});

document.addEventListener('keydown', function(event){
    event.preventDefault()
})