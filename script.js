document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade =document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade =document.getElementById('opcoes-acessibilidade'); 

    botaoDeAcessibilidade.addEventListener('click', funcion(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista')
                
            }
        }
    })
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