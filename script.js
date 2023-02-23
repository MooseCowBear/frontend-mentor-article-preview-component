const shareArrow = document.getElementById("share-arrow"); //is this a wide enough hit radius?
shareArrow.addEventListener("click", TogglePopUp);

function TogglePopUp() {
    console.log("called function");
    const popup = document.getElementById("popup");
    popup.classList.toggle("show");
    
    const background = document.getElementById("arrow-background");
    background.classList.toggle("show");

    shareArrow.classList.toggle("show");
  }