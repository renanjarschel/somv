function tocasom(idElementoaudio){
    document.querySelector(idElementoaudio).play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < ListaDeTeclas,length){
const efeito = ListaDeTeclas[contador].classList [1]
const idAudio = "#som_"+efeito;
ListaDeTeclas[contador].onlclick = function(){
    tocasom (idAudio)
}
    contador = contador +1;
    contador.log (contador);
}