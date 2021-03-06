var menus = $(".navigation__item");
var menusMobile = $(".navigation-mobile__item");
var numberOfMenu = menus.length;

if(menus.length != menusMobile.length){
    alert("The number of menus in browser and mobile version do not match. The menu will not work. Please do correction.");
}
else {
    for(var i = 0; i < numberOfMenu; i++){
    
        menus[i].addEventListener("click", function(e){
            
            var buttonId = this.id;
    
            scrollToSection(buttonId);
    
        });
        
        menusMobile[i].addEventListener("click", function(e){
            
            var buttonId = this.id;
    
            scrollToSection(buttonId);
    
        });
    
    }
}

function scrollToSection (buttonId) {
    switch(buttonId) {
        case "abt":
            //#section-about
            document.querySelector("#section-about").scrollIntoView({behavior:"smooth"});
        break;
        case "edu":
            //#section-education
            document.querySelector("#section-education").scrollIntoView({behavior:"smooth"});
        break;
        case "exp":
            //#section-work-experience
            document.querySelector("#section-work-experience").scrollIntoView({behavior:"smooth"});
        break;
        case "con":
            //section-contact
            document.querySelector("#section-contact").scrollIntoView({behavior:"smooth"});
        break;
        default:
            alert("Something impossible just happenned.");
    }

    if( $(".wrapper").width() <= 600){
        toggleMobileMenu();
    }
    
}

//SCROLLING FUNCTION
$(".wrapper").on('scroll', () => {

    var wrapperScroll = $(".wrapper").scrollTop();
    var headerHeight = $(".header").height();
    
    $(".navigation").toggleClass("mini", wrapperScroll >= headerHeight);
    
});


$("#nav-button").on("click", () => {
    toggleMobileMenu();
})

let toggleMobileMenu = () => {
    $(".navigation-mobile__menu").toggleClass("show");
}