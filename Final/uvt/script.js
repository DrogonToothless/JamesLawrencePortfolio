function menuOpen() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menudisplay");
}
const teenslide = document.getElementById("teenslide");
const adultslide = document.getElementById("adultslide");
function teenSlide() {
    teenslide.style.display = "block";
    adultslide.style.display = "none";
}
function adultSlide() {
    teenslide.style.display = "none";
    adultslide.style.display = "block";
}
function submitdata() {
   let textinput1 = document.getElementById("textinput1");
   textinput1.value = " ";
   let textinput2 = document.getElementById("textinput2");
   textinput2.value = " ";
   let textinput3 = document.getElementById("textinput3");
   textinput3.value = " ";
   let textinput4 = document.getElementById("textinput4");
   textinput4.value = " ";
   let textinput5 = document.getElementById("textinput5");
   textinput5.value = " ";
}