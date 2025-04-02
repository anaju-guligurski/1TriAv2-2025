document.addEventListener('DOMcontentLoaded', function (){
    let tamanhoAtualFonte = 1;

    const aumentarFonteBotao = document.getElementById('aumentar-fonte');

    aumentarFonteBotao.addEventListener('click', function(){ 
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem` 
    })
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    diminuirFonteBotao.addEventListener('click', function(){ 
        tamanhoAtualFonte -=0.1; 
        document.body.style.fontSize = `${tamanhoAtualFonte}rem` 
    })
})