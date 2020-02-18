var menus = $(".navigation__item");
var numberOfMenu = menus.length;

for(var i = 0; i < numberOfMenu; i++){
    
    menus[i].addEventListener("click", function(e){
        
        var buttonId = this.id;

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

    }); 

}


//SCROLLING FUNCTION

$(".wrapper").on('scroll', function(){
    
    var wrapperScroll = $(".wrapper").scrollTop();
    var headerHeight = $(".header").height();
    
    $(".navigation").toggleClass("hide", wrapperScroll >= headerHeight);
    
});
