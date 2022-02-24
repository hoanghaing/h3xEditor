const toolbar = document.querySelector(".toolbar");

$(document).ready(function () {
    toolbarEvent();
});


function toolbarEvent() {
    $(toolbar).on("click", ".toolElement", function (){
        console.log("Clicked the tool");
    })
}

