const bannerWide = document.getElementById("banner-border-wide");
const bannerNarrow = document.getElementById("banner-border-narrow");
const authorPhoto = document.getElementById("author-photo");
const authorBorderPhoto = document.getElementById("author-border-photo");
const button = document.getElementById("button");
const sq1 = document.getElementById("square-one");
const sq2 = document.getElementById("square-two");

window.onload = function() {
   bannerWide.style = "transform: translateX(-56px) translateY(-22px); transition: all .75s;";
   bannerNarrow.style = "transform: translateX(28px) translateY(29px); transition: all .75s;";
   sq1.style = "transform: rotate(180deg); transition: all .75s;"
   sq2.style = "transform: rotate(180deg); transition: all .75s;"
};
/* authorBorderPhoto.addEventListener("mousemove", () => {authorPhoto.style = "transform: translate(32px, 22px); transition: all .5s;"} )
authorBorderPhoto.addEventListener("mouseleave", () => {authorPhoto.style = "transform: translate(0, 0); transition: all .5s;"}) */

button.addEventListener("mousemove", () => {button.style = "background-color: red;"} )
button.addEventListener("mouseleave", () => {button.style = "background-color: none;"} )