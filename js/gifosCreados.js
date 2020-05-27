
let misGifosCreados = document.getElementsByClassName('misGifosCreados')[0]
let buscar2 = document.getElementsByClassName('buscar')[0]
let sugerencias2 = document.getElementsByClassName('sugerencias')[0]
let tendencias2 = document.getElementsByClassName('tendencias')[0]
let contBoxMisGifos2 = document.getElementsByClassName('contBoxMisGifos')[0]
let relatedTags2 = document.getElementsByClassName('relatedTags')[0]


let btnmisGufos = document.getElementById('misGufos').addEventListener('click', () => {
    buscar2.style.display = 'none'
    sugerencias2.style.display = 'none'
    tendencias2.style.display = 'none'
    contBoxMisGifos2.style.display = 'flex'
    contBoxMisGifos2.style.marginTop = '1px'
    contBoxMisGifos2.style.marginLeft = '5px'
    relatedTags2.style.display = 'none'

    //crearGaleria();
async function getMisGifos() {
  let idsMyGuifos = JSON.parse(localStorage.getItem("contMisGifos")); 
  let  arrayData= [];
  
  try{
    
    for(let i=0;i<idsMyGuifos.length;i++){
      const response = await fetch(`https://api.giphy.com/v1/gifs/${idsMyGuifos[i]}?api_key=${API_KEY}`)
      
      let data = await response.json();
      let gifosData = data.data;      
      arrayData.push(gifosData); 
      
    }      
    return arrayData;
  }catch(e){
      return e;
  }  
}


getMisGifos()
    .then(data => 
      
    //{
        ///for( let i = 0; i< data.lenght; i++) {
        data.forEach(element => {
          misGifosCreados.innerHTML += `
        <div class="divMyGifos">                
            <img class="imgMyGifos" src="${element.images.original.url}" alt="">                
        </div>`  
        
        })

    );   
})