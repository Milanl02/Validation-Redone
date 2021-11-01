var responseDIV=document.body.querySelector(".loginResponse");


function createNav(){
    var nav=document.createElement("nav");
    document.body.appendChild(nav);
    responseDIV.innerHTML="";
}

document.body.querySelector(".submitButton").addEventListener("click", function (){
    var username=document.body.querySelector(".login").value;
    if (username === "coolStudent123"){
        createNav();
    }else{
        responseDIV.innerHTML="You typed in the wrong username. Try again!"
    }
})