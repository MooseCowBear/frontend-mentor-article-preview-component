const shareArrow = document.getElementById("share-arrow"); 
shareArrow.addEventListener("click", TogglePopUp);

function TogglePopUp() {
    const popup = document.getElementById("popup");
    popup.classList.toggle("show");
    
    const background = document.getElementById("arrow-background");
    background.classList.toggle("show");

    shareArrow.classList.toggle("show");
  }


document.addEventListener("click", function(e) {
    const targetId = e.target.getAttribute('id');
    const ignore = e.target.classList.contains("popup");
        if (targetId != "share-arrow" && !ignore){
            ClosePopUp();
        }
    }
);

function ClosePopUp() {
  const popup = document.getElementById("popup");
  const background = document.getElementById("arrow-background");
  
    if (popup.classList.contains("show")){
        background.classList.remove("show");
        popup.classList.remove("show");
        shareArrow.classList.remove("show");
    }
}