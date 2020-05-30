let hamburgerIcon = document.getElementById("nav-toggle");
let mainMenu = document.getElementById("menu");
let menuList = document.getElementById("menu-list");
let wrapper = document.getElementById("wrapper");  


function activateClass() {	
    if (hamburgerIcon.className == "active" ) {       
        hamburgerIcon.className="";
        mainMenu.className="menu-show out"; 
		setTimeout(disableClass, 900);		  	 		
    } 
    else {
       hamburgerIcon.className="active";		
       mainMenu.className="menu-show in";       
    } 
 }
 
 disableClass = () => {        mainMenu.className="menu";		}
 hamburgerIcon.addEventListener("click", activateClass); 
 
 function reloadClasses() {
    let val = window.getComputedStyle(wrapper).width;
    console.log(window.getComputedStyle(wrapper).width);
    if (val > '599px') { mainMenu.className="menu"; hamburgerIcon.className=""; } else {}
 };
 window.addEventListener(`resize`, reloadClasses);

 

   /*console.log(name.value + "  " + email.value + "  " + text.value); console.log(val);
  console.log(typeof val); console.log(window.getComputedStyle(wrapper).width);*/