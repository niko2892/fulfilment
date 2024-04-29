const mainMenuWrapper = document.querySelector('.main-menu-wrapper');
const backToTopPointer = document.querySelector('#back-to-top');

function clickOnMenu(x) {
    x.classList.toggle("change");
    mainMenuWrapper.classList.toggle('hidden')
}

window.addEventListener("scroll", function() {
    if (window.scrollY > window.innerHeight / 0.9) {
    //   document.getElementById("back-to-top").style.display = "block";
        backToTopPointer.classList.remove('hidden')
        backToTopPointer.style.display = "block"
    } else {
    //   document.getElementById("back-to-top").style.display = "none";
        backToTopPointer.classList.add('hidden')
    }
  });
  
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});