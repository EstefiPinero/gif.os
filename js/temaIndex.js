//------>MOSTRAR OCULTAR LISTA<-----

let arrow = document.getElementById('elegirt2');
arrow.addEventListener('click', showHide);

let desplegar = document.getElementById('elegirt');
desplegar.addEventListener('click', showHide);

function showHide(){
     
    if(listaTemas.style.display == "") {
        listaTemas.style.display = "flex";

    }else if(listaTemas.style.display == "flex"){
        listaTemas.style.display = "";
    }
}

//GUARDAR EN LOCAL STORAGE
let header = document.getElementsByTagName("header")[0];                                                                                                         
let body = document.getElementsByTagName("body")[0];
let imgLogo = document.getElementById("imgGif");
let darkBotones = document.getElementsByClassName("darkBotones");
let listaTemas= document.getElementsByClassName("dropContent")[0];  
let sDay = document.getElementById("sDay");
let sNight = document.getElementById("sNight");
let cabecera = document.getElementsByClassName("cabecera")[0];
let buscar = document.getElementsByClassName("buscar")[0]
let form = document.getElementsByTagName('form')[0]
let contrelatedBtn = document.getElementsByClassName('contRelatedBtn')[0]
let rltBtn = document.querySelectorAll('.relatedBtn')
let btnVerMas = document.getElementsByClassName("verMas");
let conte_Gif = document.getElementsByClassName("_conte_Gif");
let headerDark = document.getElementsByClassName('headerDark')
let whiteTx = document.getElementsByClassName('whiteTx')
let searchBtn2 = document.getElementsByClassName('botonBuscar')[0]
let lupa2 = document.getElementById('lupa')
let valorInput2 = document.getElementById('explore')

if(!localStorage.getItem("dark")){   
    localStorage.setItem("dark",false);
};

function cargarTheme() {
    setTimeout(() =>{
    //ESTILOS LIGHT
    if(localStorage.getItem("dark") == "true") {
        
        header.classList.replace('hdDark', 'hdLight')
        body.style.backgroundColor = "#FFF4FD";    
        imgLogo.src = "./images/gifOF_logo.png"; 
        //lupa2.src = "./images/lupa_inactive.svg"
        for(let i = 0; i < darkBotones.length; i++) {
            darkBotones[i].style.backgroundColor= "#F7C9F3"; 
            darkBotones[i].style.color = "#110038";
        };
        listaTemas.style.backgroundColor = "#E6E6E6";
        sDay.classList.replace('listDark', 'list')
        sNight.classList.replace('listDark', 'list')
        cabecera.classList.replace('linear', 'cabecera'); 
        buscar.classList.replace('buscarDark', 'buscar')
        form.classList.replace('formDark', 'formLight')
        //searchBtn2.classList.replace('botonBuscarDark', 'botonBuscar')
        contrelatedBtn.classList.replace('contRelatedBtnDark', 'contRelatedBtn')
        for (i = 0; i < rltBtn.length; i++) {
            rltBtn[i].className = "relatedBtn";
        };
        for (let i = 0; i < btnVerMas.length; i++) {
            btnVerMas[i].style.backgroundColor = '#4180F6'
        };
        for (let i = 0; i < conte_Gif.length; i++) {
            conte_Gif[i].style.backgroundColor = '#E6E6E6'
        }
        for (let i = 0; i < headerDark.length; i++) {
            headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)'
        }
        for (let i = 0; i < whiteTx.length; i++) {
            whiteTx[i].style.color = '#110038'
        }
        if (valorInput2.value.trim() !== "") {
            // Busqueda llena tema claro
          
            searchBtn2.color = "#110038"
            searchBtn2.style.backgroundColor= "#F7C9F3";
            lupa2.src = "./images/lupa.svg"; 
        // Busqueda llena tema oscuro
        } else {
            searchBtn2.color = "#B4B4B4"
            searchBtn2.style.backgroundColor="#E6E6E6";
            lupa2.src ="./images/lupa_inactive.svg";
        }
        

    // ESTILOS DARK
    }else if(localStorage.getItem("dark") == "false") {

        header.classList.replace('hdLight', 'hdDark')
        body.style.backgroundColor = "#110038"; 
        imgLogo.src = "./images/gifOF_logo_dark.png";
        for (let i = 0; i < darkBotones.length; i++) {
            darkBotones[i].style.backgroundColor = "#EE3EFE";    
            darkBotones[i].style.color = "#FFFFFF"; 
        };
        listaTemas.style.backgroundColor = "#B4B4B4"
        sNight.classList.replace('list', 'listDark')
        sDay.classList.replace('list', 'listDark')
        cabecera.classList.replace('cabecera', 'linear');
        buscar.classList.replace('buscar', 'buscarDark')
        form.classList.replace('formLight', 'formDark')
        //searchBtn2.classList.replace('botonBuscar', 'botonBuscarDark')
        contrelatedBtn.classList.replace('contRelatedBtn', 'contRelatedBtnDark')
        for (i = 0; i < rltBtn.length; i++) {
            rltBtn[i].className = "rltBtnDark";
        }
        for (let i = 0; i < btnVerMas.length; i++) {
            btnVerMas[i].style.backgroundColor = '#2E32FB'
        }
        for (let i = 0; i < conte_Gif.length; i++) {
          conte_Gif[i].style.backgroundColor = '#B4B4B4'
        }
        for (let i = 0; i < headerDark.length; i++) {
            headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%)'
        }
        for (let i = 0; i < whiteTx.length; i++) {
            whiteTx[i].style.color = '#FFFFFF'
        }
        if (valorInput2.value.trim() !== "") {
            searchBtn2.color = "#FFFFFF"
            searchBtn2.style.backgroundColor="#EE3EFE";
            lupa2.src = "./images/lupa_light.svg";
        } else {
            searchBtn2.color = "#8F8F8F"
            searchBtn2.style.backgroundColor="#B4B4B4";
            lupa2src = "./images/lupa-2.svg";
        }

    };

    },1000)
  
}

//------>FUNCION SAILOR DAY<-----
// function dayTheme() {
    sDay.addEventListener('click', () => {
    if(localStorage.getItem("dark") == "false") {
        
        header.classList.replace('hdDark', 'hdLight')
        body.style.backgroundColor = "#FFF4FD";    
        imgLogo.src = "./images/gifOF_logo.png"; 
        for(let i = 0; i < darkBotones.length; i++) {
            darkBotones[i].style.backgroundColor= "#F7C9F3"; 
            darkBotones[i].style.color = "#110038";
        };
        listaTemas.style.backgroundColor = "#E6E6E6";
        sDay.classList.replace('listDark', 'list')
        sNight.classList.replace('listDark', 'list')
        cabecera.classList.replace('linear', 'cabecera'); 
        buscar.classList.replace('buscarDark', 'buscar')
        form.classList.replace('formDark', 'formLight')
        //searchBtn2.classList.replace('botonBuscarDark', 'botonBuscar')
        contrelatedBtn.classList.replace('contRelatedBtnDark', 'contRelatedBtn')
        for (i = 0; i < rltBtn.length; i++) {
            rltBtn[i].className = "relatedBtn";
        };
        for (let i = 0; i < btnVerMas.length; i++) {
            btnVerMas[i].style.backgroundColor = '#4180F6'
        };
        for (let i = 0; i < conte_Gif.length; i++) {
            conte_Gif[i].style.backgroundColor = '#E6E6E6'
        };
        for (let i = 0; i < headerDark.length; i++) {
            headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)'
        }
        for (let i = 0; i < headerDark.length; i++) {
            headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)'
        }
        for (let i = 0; i < whiteTx.length; i++) {
            whiteTx[i].style.color = '#110038'
        }
        if (valorInput2.value.trim() !== "") {
            // Busqueda llena tema claro
          
            searchBtn2.color = "#110038"
            searchBtn2.style.backgroundColor= "#F7C9F3";
            lupa2.src = "./images/lupa.svg"; 
        // Busqueda llena tema oscuro
        } else {
            searchBtn2.color = "#B4B4B4"
            searchBtn2.style.backgroundColor="#E6E6E6";
            lupa2.src ="./images/lupa_inactive.svg";
        }
        localStorage.setItem("dark",true);
    }
    })


//------>FUNCION SAILOR NIGHT<-----
    sNight.addEventListener('click', () => {
    if(localStorage.getItem("dark") == "true") {

        header.classList.replace('hdLight', 'hdDark')
        body.style.backgroundColor = "#110038"; 
        imgLogo.src = "./images/gifOF_logo_dark.png";
        for (let i = 0; i < darkBotones.length; i++) {
            darkBotones[i].style.backgroundColor = "#EE3EFE";    
            darkBotones[i].style.color = "#FFFFFF"; 
        };
        listaTemas.style.backgroundColor = "#B4B4B4"
        sNight.classList.replace('list', 'listDark')
        sDay.classList.replace('list', 'listDark')
        cabecera.classList.replace('cabecera', 'linear');
        buscar.classList.replace('buscar', 'buscarDark')
        form.classList.replace('formLight', 'formDark')
        //searchBtn2.classList.replace('botonBuscar', 'botonBuscarDark')
        contrelatedBtn.classList.replace('contRelatedBtn', 'contRelatedBtnDark')
        for (i = 0; i < rltBtn.length; i++) {
            rltBtn[i].className = "rltBtnDark";
        }
        for (let i = 0; i < btnVerMas.length; i++) {
            btnVerMas[i].style.backgroundColor = '#2E32FB'
        }
        for (let i = 0; i < conte_Gif.length; i++) {
            conte_Gif[i].style.backgroundColor = '#B4B4B4'
        }
        for (let i = 0; i < headerDark.length; i++) {
            headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%)'
        }
        for (let i = 0; i < whiteTx.length; i++) {
            whiteTx[i].style.color = '#FFFFFF'
        }
        if (valorInput2.value.trim() !== "") {
            searchBtn2.color = "#FFFFFF"
            searchBtn2.style.backgroundColor="#EE3EFE";
            lupa2.src = "./images/lupa_light.svg";
        }
        else {
            searchBtn2.color = "#8F8F8F"
            searchBtn2.style.backgroundColor="#B4B4B4";
            lupa2.src = "./images/lupa-2.svg";
        }
        localStorage.setItem("dark",false);
        
    }
    })

cargarTheme()



