var menus = document.querySelectorAll(".navigation__menu");
var numberOfMenu = menus.length;

for(var i = 0; i < numberOfMenu; i++){
    
    menus[i].addEventListener("click", function(e){
        
        var buttonId = this.id;

        switch(buttonId) {
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
