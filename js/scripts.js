var docStat = document.readyState;

while(docStat == "loading" || docStat == "interactive") {

    setTimeout(function(){
        console.log(docStat+"\n");
        
    },3000)

}

document.querySelector(".test").classList.add("display-none");
