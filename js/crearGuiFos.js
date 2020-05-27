//----------------------------MANEJO BUTTON CREATE
let contCrear = document.getElementsByClassName('cont_crear')[0];
let cont_record = document.getElementsByClassName('cont_record')[0];
let contPreview = document.getElementsByClassName('contPreview')[0];
let contListo = document.getElementsByClassName('contListo')[0];
let checkHeader_text = document.getElementsByClassName('checkHeader_text')[0];
let barra_carga = document.getElementsByClassName('barra_carga');
let barra_barra = document.getElementsByClassName('barra_barra');
let btn_listo = document.getElementById('btn_listo');
let btnCapturar = document.getElementById('btnCapturar');
let gifCreado = document.getElementById('gifCreado')
let globe_img = document.getElementById('globe_img');
let pTiempoCarga = document.getElementById('pTiempoCarga');
let progress2 = document.getElementById('progressBar2')
let btnCancelar2 = document.getElementById('btnCancelar2');
let estamosS = document.getElementById('estamosS');
let capturaGif = document.getElementById('capturaGif');
const API_KEY = '5c44dQP47Sp08444UvPPyAnTcqoReYrf'
let imgSubido = document.getElementById('imgSubido');
let btnCopy = document.getElementsByClassName('btnCopy')[0]
let btnDownload = document.getElementsByClassName('btnDownload')[0]
let btnListo2 = document.getElementsByClassName('btnListo2')[0]
let contBoxMisGifos = document.getElementsByClassName('contBoxMisGifos')[0]
let contMisGifos = document.getElementsByClassName('contMisGifos')


  //--------------------------MANEJO BUTTON COMENZAR
let btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', () => {
    cont_record.style.display = "flex";
    contCrear.style.display = "none";
    globe_img.style.display = "none";
    pTiempoCarga.style.display = "none";
    progressBar2.style.display = "none";
    btnCancelar2.style.display = "none";
    estamosS.style.display = "none";
    let video = document.getElementById('gifCapture')
    navigator.mediaDevices.getUserMedia({
        video:{
            width: 832,
            height: 434},
        audio: false

    }).then(stream => { 
        video.srcObject = stream;
        video.play();

    //--------------------------MANEJO BUTTON CAPTURAR
    let contBtnCapturar = document.getElementsByClassName('contBtnCapturar')[0];
    
        btnCapturar.addEventListener('click', () => {
        
        contBtnCapturar.style.display = "none";
        checkHeader_text.innerHTML = "Capturando Tu Guifo";
       
        let timecapturar = document.createElement('figure');
        timecapturar.id = 'time';
        contListo.appendChild(timecapturar)
        
        let spancapturar = document.createElement('span');
        // spancapturar.textContent = '00:00:00:01'
        spancapturar.id = 'spancapturar'
        timecapturar.appendChild(spancapturar)

        
        // contador        
        h = 0;
        m = 0;
        s = 0;
        document.getElementById("spancapturar").innerHTML="00:00:00";
        escribir();
        id = setInterval(escribir,1000);
        
        function escribir(){
            var hAux, mAux, sAux;
            s++;
            if (s>59){m++;s=0;}
            if (m>59){h++;m=0;}
            if (h>24){h=0;}

            if (s<10){sAux="0"+s;}else{sAux=s;}
            if (m<10){mAux="0"+m;}else{mAux=m;}
            if (h<10){hAux="0"+h;}else{hAux=h;}

            document.getElementById("spancapturar").innerHTML = hAux + ":" + mAux + ":" + sAux; 
        }
        
        //----------------------------------------------------
        let btnGrabar = document.createElement('button');
        btnGrabar.className = 'btnGrabar';
        contListo.appendChild(btnGrabar)

        let imgcapturar = document.createElement('img');
        imgcapturar.src = "./images/recording.svg";
        btnGrabar.appendChild(imgcapturar)

        //----------------------------------------------------
        let btn_listo = document.createElement('button');
        btn_listo.id = 'btn_listo';
        btn_listo.className = 'btn_listo'
        btn_listo.textContent = 'Listo'
        contListo.appendChild(btn_listo)

        let recorder = new RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 720,
            height: 480,
            onGifRecordingStarted: function() {
                console.log('grabando');
            },
        });
        recorder.startRecording(); 
            //--------------------manejo boton LISTO-----------------------
            btn_listo.addEventListener('click', () => {
                
                clearInterval(id);        
                
                recorder.stopRecording(() => {
                    
                    checkHeader_text.innerHTML = "Vista Previa";
                    btnGrabar.style.display = 'none'
                    btn_listo.style.display = 'none'

                    let barra_carga = document.createElement('div');
                    barra_carga.className = 'barra_carga'
                    contListo.appendChild(barra_carga)

                    let forward = document.createElement('div');
                    forward.className = 'forward btnDark'
                    barra_carga.appendChild(forward)

                    let img_forward = document.createElement('img');
                    img_forward.id = 'img_forward';
                    img_forward.src = './images/forward.svg'
                    forward.appendChild(img_forward);

                    let barra_barra = document.createElement('div');
                    barra_barra.className = 'barra_barra'
                    barra_carga.appendChild(barra_barra)

                    let btn_repetir = document.createElement('button');
                    btn_repetir.className = 'btn_repetir';
                    barra_carga.appendChild(btn_repetir)

                    let ahref = document.createElement('a')
                    ahref.href = 'indexCrear.html'
                    ahref.textContent = 'Repetir Captura'
                    btn_repetir.appendChild(ahref)
                    
                    let btn_subir = document.createElement('button');
                    btn_subir.className = 'btn_subir btnDark';
                    btn_subir.textContent = 'Subir Guifo'
                    barra_carga.appendChild(btn_subir)
                    

                    barra_barra.innerHTML = `
                    <div id="progressBar" class="progress_bar btnDark"></div>`
                    
                    let progress = document.getElementById('progressBar')
                    setTimeout(
                        function(){
                          progress.style.width = "100%";
                        }
                    ,1);

                    if(!JSON.parse(localStorage.getItem("dark"))){
                        for (let i = 0; i < btnDark.length; i++) {
                            btnDark[i].style.backgroundColor = '#EE3EFE'
                        } 
                    }else {
                        for (let i = 0; i < btnDark.length; i++) {
                            btnDark[i].style.backgroundColor = '#F7C9F3'
                        }  
                    }

                    stream.stop();
                    video.style.display = 'none'
                    gifCreado.setAttribute('src', URL.createObjectURL(recorder.getBlob()) )
                    //gifCreado.src = ;
                    gifCreado.style.width = '832px'
                    gifCreado.style.height = '434px'
                    gifCreado.style.display = 'block'
                    console.log(gifCreado)
                    

                    if(!localStorage.getItem("contMisGifos")){  
                        localStorage.setItem("contMisGifos","[]");
                      }
                    //---------------manejo boton subir----------
                    btn_subir.addEventListener('click', () => {
                        checkHeader_text.innerHTML = "Subiendo Guifo"
                        gifCreado.style.display = 'none'
                        barra_carga.style.display = 'none'
                        timecapturar.style.display = 'none'
                        globe_img.style.display = "flex";
                        pTiempoCarga.style.display = "flex";
                        progress2.style.display = "block";
                        btnCancelar2.style.display = "flex";
                        estamosS.style.display = "flex";

                        setTimeout(
                            function(){
                              progress2.style.width = "50%";
                            }
                        ,1);

                        const data = new FormData();
                        data.append('file', recorder.getBlob());
                        
                        //function para subir mi gifo
                        async function subir() {
                            try{
                            const respuesta = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`, {
                                method: 'POST',
                                body: data
                            });
                            return await respuesta.json();
                            }catch (error){
                                return alert(error + ' Presione cancelar para volver a grabar');

                            }
                        }

                        subir().then(migifo => {
                            const id = migifo.data.id;
                            let arrayId = JSON.parse(localStorage.getItem("contMisGifos"));
                            arrayId.push(id);
                            localStorage.setItem("contMisGifos",JSON.stringify(arrayId)); 

                            //const migifoString = JSON.stringify(migifo);
                            //console.log(migifoString)
                            console.log(arrayId)    
                            //localStorage.setItem(id, migifoString);
                            
                            return id;
                            
                        }).then(id => {

                            setTimeout(() => {
                                contCrear.style.display = "none";
                                cont_record.style.display = "none";
                                link.style.display = 'none';
                                capturaGif.style.display = "block";
                                imgSubido.setAttribute('src', URL.createObjectURL(recorder.getBlob()));
                            }, 2000);

                            contBoxMisGifos.style.display = 'flex'

                            let misGifosCreados = document.getElementsByClassName('misGifosCreados')[0]
   

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

                            btnCopy.addEventListener('click', () => {
                                
                                async function idSearch() {
                                    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
                                    return await respuesta.json();
                                }

                                idSearch(id).then(migifo => {
                                    console.log(migifo)
                                    let link = document.getElementById('link')
                                    link.style.display = 'block';
                                    link.value = migifo.data.images.original.url;
                                    link.select();
                                    document.execCommand('copy');
                                    link.style.display = 'none';
                                    
                                    alert('Enlace copiado');

                                })

                            });

                            btnDownload.addEventListener('click', () => {
                                btnDownload.setAttribute('href', imgSubido.src);
                                btnDownload.setAttribute('download', 'gif'); 
                            })
                            //let btnListo2 = document.getElementsByClassName('btnListo2')[0]
                            //let contBoxMisGifos = document.getElementsByClassName('contBoxMisGifos')[0]

                            btnListo2.addEventListener('click', () => {
                                //let contMisGifos = document.getElementsByClassName('contMisGifos')
                                
                                location.reload()
                            
                            
                         
                            })

                        });
                    });
                    

                    
                });
            });
        });
    });
});

