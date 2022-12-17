const mContent = document.getElementById("mainContent");

window.addEventListener("load", ()=>{
    mContent.classList.remove("not-loaded");
    mContent.classList.add("loaded");
})