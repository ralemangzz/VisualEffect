function scrollAppear(){
    var aboutText = document.querySelector(".about-text");
    var introPostition = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(introPostition < screenPosition){
        aboutText.classList.add("intro-appear");
    }
}

window.addEventListener("scroll",scrollAppear);