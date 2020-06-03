// ---------->CONEXION A LA API<----------------------

const API_KEY = '5c44dQP47Sp08444UvPPyAnTcqoReYrf';

let divSuge_conte = document.getElementsByClassName('divSuge_conte')[0];
let divSearch_related = document.getElementsByClassName('divSearch_related');
let gif_img = document.getElementsByClassName('gif_img')
let tenden_conte_Gif = document.getElementsByClassName('tenden_conte_Gif')
let divGif = document.getElementsByClassName('divTenden_conten')[0];

// -------------------------------------SUGERENCIAS-----------------------------
// let predefinido = ['harry potter', 'marvel', 'bob esponja', 'disney']
function gifRandom(predefinido) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${predefinido}&limit=1&offset=2&rating=G&lang=en`)
    
    .then((response) => {
        return response.json()
    })
    .then((data) => {
            
        console.log(data);
            
        for(let i = 0; i< data.data.length; i++){        
            
            divSuge_conte.innerHTML += `
            <div class="_conte_Gif">
                <div class="_conteGif_Header headerDark">
                    <p class="_conteGif_HeaderText">#${data.data[i].title}</p>
                    <img class="btn_x" src="./images/button3.svg" alt="">
                </div>
                <img class="Gif_img" src="${data.data[i].images.original.url}" alt="">
                <button class="verMas" id="verMas" onclick=loadVerMas('${predefinido}')>Ver más...</button>
            </div>`                 
        }
    
    })
    
}   
gifRandom('harrypotter');
gifRandom('marvel');
gifRandom('bobesponja');
gifRandom('disney');

//botones Ver Mas
let _conteGif_HeaderText = document.getElementsByClassName('_conteGif_HeaderText')

function loadVerMas(random) {
let searchvermas = document.getElementById("explore")   

    searchvermas.value = random
    
    console.log(searchvermas)
    results(searchvermas)
    
    showResults()   

}

// -------------------------------------TENDENCIAS-----------------------------
let arrayTenden = [];

async function trending() {
    
    try {
        let gifosApi= `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&rating=G`;
        let response = await fetch(gifosApi);
        arrayTenden = await response.json();
        console.log(arrayTenden);

    }catch (e){
        return e;
    
    }  
    return arrayTenden.data;
}
//creacion de gifos dinamicamente
trending() 
    .then (data => {  
        
        for(let i = 0; i<data.length; i++) {
        
        let pFooter = document.createElement('p');
        let textFooter = document.createTextNode('#'+ data[i].title);
        pFooter.className = 'textFooter';
        pFooter.appendChild(textFooter);
                
        let divFooter = document.createElement('div');
        divFooter.className = 'tenden_conteGif_Footer headerDark';
        divFooter.appendChild(pFooter);

        let gif_img = document.createElement('img');
        gif_img.className = 'gif_img';
        gif_img.src = data[i].images.original.url;
        
        let divConteGif = document.createElement('div');
        divConteGif.className = 'tenden_conte_Gif';
        divConteGif.appendChild(gif_img);
        divConteGif.appendChild(divFooter);
    
        divGif.appendChild(divConteGif);
        
        }
    }).catch(e => console.log(e)) 

//------------------------------------DESPLEGADO BOTTONES BUSQUEDA SUGERIDOS-----------------
let contRelatedBtn = document.getElementsByClassName('contRelatedBtn')[0];
let formLight = document.getElementsByClassName('formLight')[0];
let valorInput = document.getElementById('explore')
let searchBtn = document.querySelector('button.botonBuscar');
let lupa = document.getElementById('lupa')

valorInput.addEventListener('click',() => {
    if(contRelatedBtn.style.display= "none") {
        contRelatedBtn.style.display = "flex";
        //relatedTags.style.display= "none";
        
    }
})
function actiBtn() {
    if (valorInput.value.trim() !== "") {
          searchBtn.removeAttribute('disabled')
        //  tema claro
          if (localStorage.getItem("dark") == "true"){
            searchBtn.color = "#110038"
            searchBtn.style.backgroundColor= "#F7C9F3";
            lupa.src = "./images/lupa.svg"; 
        // tema oscuro
        } else{
            searchBtn.color = "#FFFFFF"
            searchBtn.style.backgroundColor="#EE3EFE";
            lupa.src = "./images/lupa_light.svg";
        }
        
    } else {
        searchBtn.setAttribute('disabled', "true");
        //  tema claro
        if (localStorage.getItem("dark") == "true"){
            searchBtn.color = "#B4B4B4"
            searchBtn.style.backgroundColor="#E6E6E6";
            lupa.src ="./images/lupa_inactive.svg";
        // tema oscuro
     } else{
            searchBtn.color = "#8F8F8F"
            searchBtn.style.backgroundColor="#B4B4B4";
            lupa.src = "./images/lupa-2.svg"; 

     }	            
    }
}
//Evento Enter
valorInput.addEventListener("keyup",e =>{
    if (event.keyCode === 13) {
        e.preventDefault();
        showResults(valorInput.value);
    }
})

formLight.addEventListener("submit",e => {
    e.preventDefault();
})



//Funciones de los 3 botones
const relatedBtn = document.getElementById('relatedBtn')
const relatedBtn2 = document.getElementById('relatedBtn2')
const relatedBtn3 = document.getElementById('relatedBtn3')

relatedBtn.addEventListener('click', () => {
    let searchRlt = document.getElementById("explore")
    searchRlt.value  = 'simpsons'
    results(searchRlt)
    showResults()
})

relatedBtn2.addEventListener('click', () => {
    let searchRlt = document.getElementById("explore")
    searchRlt.value  = 'caidas'
    results(searchRlt)
    showResults()
})

relatedBtn3.addEventListener('click', () => {
    let searchRlt = document.getElementById("explore")
    searchRlt.value  = 'friends'
    results(searchRlt)
    showResults()
})
  
//-----------------------------------------FUNCION SEARCH------------------------------------
async function results(search) {
    
    try {
        let gifosApi = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=16`;
        let response = await fetch(gifosApi);
        arraySearch = await response.json();
        
    }catch (e){
        return e;
        }
    return(arraySearch.data)
}  

searchBtn.addEventListener('click', showResults);

let tendenPheader = document.getElementById('pBoxHeader');
let sugeContent = document.getElementsByClassName('sugerencias')[0];
let divSearch =  document.getElementById('divSearch_conten');
let relatedTags = document.getElementById('relatedTags')
let pBoxHeader = document.getElementById('pBoxHeader')

function showResults() {
    
    let search = document.getElementById("explore").value.trim();

    // if (search == "") {
    //     alert('error: ingrese un criterio para buscar')        
    // }

    if(contRelatedBtn.style.display = "flex"){
        contRelatedBtn.style.display = "none";
        tendenPheader.innerHTML = 'Resultados de la busqueda';
        sugeContent.style.display ='none';
        divGif.style.display = 'none';
        relatedTags.style.zIndex = '-1';
    } 
   //creacion dinamica de resultados
    results(search)
        .then (data => {
            console.log(data);
            pBoxHeader.innerHTML = 'Resultados para: '+ search
            divSearch.innerHTML = '';
            relatedTags.innerHTML = '';
            
            // const rtag1 = document.getElementById('tag1')
            // rtag1.textContent = data[0].title
            // const rtag2 = document.getElementById('tag2')
            // rtag2.textContent = data[1].title
            // const rtag3 = document.getElementById('tag3')
            // rtag3.textContent = data[2].title
            
            //  for (let i = 0; i < 3; i++) { 
            //     relatedTags.innerHTML +=
            //     `<button class="searchRtag verMas" onclick="loadTags()" id="tags">#${data[i].title}</button>`

            //  }

            for (let i = 0; i < 3; i++) {
                
                let searchRtag = document.createElement('button');
                searchRtag.className = 'searchRtag verMas'
                relatedTags.appendChild(searchRtag);
                let searchRtagText = document.createTextNode('#'+ data[i].title);
                searchRtag.appendChild(searchRtagText); 
            }
                      
            for(let i = 0; i<data.length; i++) {

                let pFooter = document.createElement('p');
                let textFooter = document.createTextNode('#'+ data[i].title);
                pFooter.className = 'textFooter';
                pFooter.appendChild(textFooter);
                        
                let divFooter = document.createElement('div');
                divFooter.className = 'tenden_conteGif_Footer headerDark';
                divFooter.appendChild(pFooter);

                let gif_img = document.createElement('img');
                gif_img.className = 'gif_img';
                gif_img.src = data[i].images.original.url;
                
                let divConteGif = document.createElement('div');
                divConteGif.className = 'tenden_conte_Gif';
                divConteGif.appendChild(gif_img);
                divConteGif.appendChild(divFooter);
            
                divSearch.appendChild(divConteGif);
            }
            

            //local storage para los element nuevos producto de la busqueda
            if(localStorage.getItem("dark") == "true") {
                for (let i = 0; i < headerDark.length; i++) {
                    headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #F7C9F3 0%, #4180F6 100%)'
                }
                for (let i = 0; i < btnVerMas.length; i++) {
                    btnVerMas[i].style.backgroundColor = '#4180F6'
                };
            }else if(localStorage.getItem("dark") == "false") {
                for (let i = 0; i < headerDark.length; i++) {
                    headerDark[i].style.backgroundImage = 'linear-gradient(270deg, #ee3efe 0%, #2e32fb 100%)'
                }
                for (let i = 0; i < btnVerMas.length; i++) {
                    btnVerMas[i].style.backgroundColor = '#2E32FB'
                }
            }
            
        })
        .catch(e => console.log(e))
}
//---------------------------TAGS RANDOM-----------------------------------------------


// rtag1.addEventListener('click', () => {
//     let searchRlt = document.getElementById("explore")
//     searchRlt.value  = 'graciosos'
//     results(searchRlt)
//     showResults()
// })

// rtag2.addEventListener('click', () => {
//     let searchRlt = document.getElementById("explore")
//     searchRlt.value  = 'peliculas'
//     results(searchRlt)
//     showResults()
// })

// rtag3.addEventListener('click', () => {
//     let searchRlt = document.getElementById("explore")
//     searchRlt.value  = 'deportes'
//     results(searchRlt)
//     showResults()
// })


    
