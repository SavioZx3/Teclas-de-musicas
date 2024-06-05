function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento.localName === "audio" && elemento) {
        elemento.play();
    } else {
       alert("ELemento não encontrado ou seletor invalido.");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList;
    const idAudio = `#som_${instrumento[1]}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event){
        if(event.code == "Space" || event.code == "Enter"){
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}
