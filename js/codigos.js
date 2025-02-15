function mostrarDiv(){

    const mensagemDiv = document.getElementById("mensagemDiv");
    mensagemDiv.style.display = "flex";}

function fecharWhats(){

    const mensagemDiv = document.getElementById("mensagemDiv");
    mensagemDiv.style.display = "none";}

function abrirTexto(icone){

    const tipoPlano = icone.closest('.tipo_plano');
    const conteudoPlano = tipoPlano.querySelector('.conteudoPlano');
    const tituloPlano = tipoPlano.querySelector('.titulo_plano');
    const tituloTres = document.getElementById('titulo_tres')

    const maxHeightComputado = window.getComputedStyle(conteudoPlano).maxHeight;
    
    if(maxHeightComputado !== "0px"){

        conteudoPlano.style.maxHeight = "0";
        tituloPlano.style.marginBottom = "0";} 
        
    else{

        conteudoPlano.style.display = "block";
        conteudoPlano.style.maxHeight = conteudoPlano.scrollHeight + "px";
        tituloTres.style.marginBottom = "0";}}