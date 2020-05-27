let header = document.querySelector("header");                                                                                                      
let body = document.querySelector("body");
let imgLogo = document.getElementById("imgGif");
let headerDark = document.getElementsByClassName('headerDark')
let conteDark = document.getElementsByClassName("conteDark");
let btnDark = document.getElementsByClassName("btnDark");
  
//ESTILOS DARK
if(!JSON.parse(localStorage.getItem("dark"))){
        
    imgLogo.src = "./images/gifOF_logo_dark.png";
    body.style.backgroundColor = "#110038";  
    header.style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
    for (let i = 0; i < headerDark.length; i++) {
        headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%)'
    }
    for (let i = 0; i < conteDark.length; i++) {
        conteDark[i].style.backgroundColor = '#B4B4B4'
    }
    for (let i = 0; i < btnDark.length; i++) {
        btnDark[i].style.backgroundColor = '#EE3EFE'
    }

//ESTILOS LIGHT
}else {
    imgLogo.src = "./images/gifOF_logo.png";
    body.style.backgroundColor = "#FFF4FD";  
    header.style.backgroundImage = "linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)"; 
    for (let i = 0; i < headerDark.length; i++) {
        headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)'
    }
    for (let i = 0; i < conteDark.length; i++) {
        conteDark[i].style.backgroundColor = '#E6E6E6'
    }
    for (let i = 0; i < btnDark.length; i++) {
        btnDark[i].style.backgroundColor = '#F7C9F3'
    }  
   
}
    
