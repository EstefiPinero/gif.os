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
let btnCancelar2 = document.getElementById('btnCancelar2');
let estamosS = document.getElementById('estamosS');
let capturaGif = document.getElementById('capturaGif');
const API_KEY = '5c44dQP47Sp08444UvPPyAnTcqoReYrf'
let imgSubido = document.getElementById('imgSubido');
let btnCopy = document.getElementsByClassName('btnCopy')[0]

// let inputListo = document.getElementById('time')[0];

  //--------------------------MANEJO BUTTON COMENZAR
let btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', () => {
    cont_record.style.display = "flex";
    contCrear.style.display = "none";
    globe_img.style.display = "none";
    pTiempoCarga.style.display = "none";
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

            btn_listo.addEventListener('click', () => {
                
                clearInterval(id);        
                
                recorder.stopRecording(() => {
                // clearInterval(comenzarTimer); // Detiene el timer
                // mostrarVistaPrevia();
                    checkHeader_text.innerHTML = "Vista Previa";
                    btnGrabar.style.display = 'none'
                    btn_listo.style.display = 'none'

                    let barra_carga = document.createElement('div');
                    barra_carga.className = 'barra_carga'
                    contListo.appendChild(barra_carga)

                    let forward = document.createElement('div');
                    forward.className = 'forward'
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
                    btn_subir.className = 'btn_subir';
                    btn_subir.textContent = 'Subir Guifo'
                    barra_carga.appendChild(btn_subir)
                    
                    barra_barra.innerHTML = `
                    <span class="divisorTiempo"></span>`

                    stream.stop();
                    video.style.display = 'none'
                    gifCreado.src = URL.createObjectURL(recorder.getBlob());
                    gifCreado.style.width = '832px'
                    gifCreado.style.height = '434px'
                    gifCreado.style.display = 'block'
                    console.log(gifCreado)
                    
                    btn_subir.addEventListener('click', () => {
                        checkHeader_text.innerHTML = "Subiendo Guifo"
                        gifCreado.style.display = 'none'
                        barra_carga.style.display = 'none'
                        // barra_barra.style.display = 'block'
                        timecapturar.style.display = 'none'
                        globe_img.style.display = "flex";
                        pTiempoCarga.style.display = "flex";
                        btnCancelar2.style.display = "flex";
                        estamosS.style.display = "flex";

                        const data = new FormData();
                        data.append('file', recorder.getBlob());

                        async function subir() {
                            const respuesta = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`, {
                                method: 'POST',
                                body: data
                            });
                            return await respuesta.json();
                        };async function subir() {
                            const respuesta = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`, {
                                method: 'POST',
                                body: data
                            });
                            return await respuesta.json();
                        };

                        subir().then(gifEnviado => {
                            const id = gifEnviado.data.id;
                            const gifString = JSON.stringify(gifEnviado);

                            // Guardar en Local Storage
                            localStorage.setItem(id, gifString);

                            return id;
                        }).then(id => {
                            // Mostrar ventana final: Guifo Subido con éxito
                            setTimeout(() => {
                                contCrear.style.display = "none";
                                cont_record.style.display = "none";
                                capturaGif.style.display = "block";
                                imgSubido.src = URL.createObjectURL(recorder.getBlob());
                            }, 2000);

                            btnCopy.addEventListener('click', () => {
                                
                                async function buscarPorID() {
                                    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
                                    return await respuesta.json();
                                }

                                // buscarPorID(id).then(gif => {
                                //     enlace.style.display = 'block';
                                //     enlace.value = gif.data.images.original.url;
                                //     enlace.select();
                                //     document.execCommand('copy');
                                //     enlace.style.display = 'none';
                                //     alert('Enlace copiado: ' + enlace.value);

                                //     // Descargar Gif
                                //     botonDescargar.setAttribute('href', gif.data.url);
                                //     botonDescargar.setAttribute('download', 'mi_guifo');
                                });

                            });

                        });
                    });
                    
                });
            });
        });
    });


