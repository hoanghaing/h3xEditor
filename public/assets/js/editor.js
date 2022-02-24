const toolbar = document.querySelector(".toolbar");

$(document).ready(function () {
    toolbarEvent();
});


function toolbarEvent() {
    $(toolbar).on("mouseover", ".toolElement", function (){
        $(this).children(".options").show();
    });
    $(toolbar).on("mouseleave", ".toolElement", function (){
        $(this).children(".options").hide();
    });
}

