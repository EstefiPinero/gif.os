// ---------->CONEXION A LA API<----------------------

const API_KEY = '5c44dQP47Sp08444UvPPyAnTcqoReYrf';

let divSuge_conte = document.getElementsByClassName('divSuge_conte')[0];
let divSearch_related = document.getElementsByClassName('divSearch_related');
let gif_img = document.getElementsByClassName('gif_img')
let tenden_conte_Gif = document.getElementsByClassName('tenden_conte_Gif')
let divGif = document.getElementsByClassName('divTenden_conten')[0];
// -------------------------------------SUGERENCIAS-----------------------------

function gifRandom(predefinido) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${predefinido}&limit=1&offset=4&rating=G&lang=en`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
            
        console.log(data);
            
        for(let i = 0; i< data.data.length; i++){        
            
            divSuge_conte.innerHTML += `
            <div class="_conte_Gif">
                <div class="_conteGif_Header">
                    <p class="_conteGif_HeaderText">${data.data[i].title}</p>
                    <img class="btn_x" src="./images/button3.svg" alt="">
                </div>
                <img class="Gif_img" src="${data.data[i].images.original.url}" alt="">
                <button class="verMas" id="verMas" onclick=loadVerMas()>Ver más...</button>
            </div>`                 
        }
    })  
}   
  
gifRandom('harry potter');
gifRandom('marvel');
gifRandom('bob esponja');
gifRandom('disney');

//---------------------------------------botones Ver Mas---------------------  
let _conteGif_HeaderText = document.getElementsByClassName('_conteGif_HeaderText')

function loadVerMas() {
    alert('hola')
let searchvermas = document.getElementById("explore")
searchvermas.value  = _conteGif_HeaderText[i].textContent|| null

for(let i = 0; i< 1; i++){ 
results(searchvermas)
showResults()
}
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

trending() 
    .then (data => {  
        
        for(let i = 0; i<data.length; i++) {
        
        let pFooter = document.createElement('p');
        let textFooter = document.createTextNode('#'+ data[i].title);
        pFooter.className = 'textFooter';
        pFooter.appendChild(textFooter);
                
        let divFooter = document.createElement('div');
        divFooter.className = 'tenden_conteGif_Footer';
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


//-----------------------------------------FUNCION SEARCH------------------------------------
async function results(search) {
    
    try {
        let gifosApi = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=12`;
        let response = await fetch(gifosApi);
        arraySearch = await response.json();
        
    }catch (e){
        return e;
        }
    return(arraySearch.data)
}  
let searchBtn = document.querySelector('button.botonBuscar');
searchBtn.addEventListener('click', showResults);


let tendenPheader = document.getElementById('pBoxHeader');
let sugeContent = document.getElementsByClassName('sugerencias')[0];
let divSearch =  document.getElementById('divSearch_conten');
let relatedTags = document.getElementById('relatedTags')

function showResults() {
    let search = document.getElementById("explore").value.trim();
    if(contRelatedBtn.style.display = "flex"){
        contRelatedBtn.style.display = "none";
        tendenPheader.innerHTML = 'Resultados de la busqueda';
        sugeContent.style.display ='none';
        divGif.style.display = 'none';
        relatedTags.style.zIndex = '-1';
    } 
   
    results(search)
        .then (data => {
            console.log(data);
            
            divSearch.innerHTML = '';
            relatedTags.innerHTML = '';
            
            for(let i = 0; i<data.length; i++) {
                let searchRtag = document.createElement('button');
                relatedTags.appendChild(searchRtag);
                let searchRtagText = document.createTextNode('#'+ data[i].title);
                searchRtag.appendChild(searchRtagText);

                let pFooter = document.createElement('p');
                let textFooter = document.createTextNode('#'+ data[i].title);
                pFooter.className = 'textFooter';
                pFooter.appendChild(textFooter);
                        
                let divFooter = document.createElement('div');
                divFooter.className = 'tenden_conteGif_Footer';
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
            
        })
        .catch(e => console.log(e))
}
//------------------------------------DESPLEGADO BOTTONES BUSQUEDA SUGERIDOS
let contRelatedBtn = document.getElementsByClassName('contRelatedBtn')[0];
let valorInput = document.getElementById('explore').addEventListener('click',() => {
    if(contRelatedBtn.style.display= "none") {
            contRelatedBtn.style.display = "flex";
    }

})

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
  
//--------------------------------------------------------------------------





    
