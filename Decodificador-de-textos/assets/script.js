
var texto = document.getElementById("texto"); 

function criptografar() {

    var textoSeparado = texto.value.split("");

    for (var contador=0; contador < textoSeparado.length; contador++) {
        if(textoSeparado[contador] == "a") {
            textoSeparado[contador] = "ai";
        }

        if(textoSeparado[contador] == "e") {
            textoSeparado[contador] = "enter";
        }

        if(textoSeparado[contador] == "i") {
            textoSeparado[contador] = "imes";
        }

        if(textoSeparado[contador] == "o") {
            textoSeparado[contador] = "ober";
        }
        
        if(textoSeparado[contador] == "u") {
            textoSeparado[contador] = "ufat";
        }
    }

    var textoJunto = textoSeparado.join("");

    var elementoPai = document.getElementsByClassName("exibir-texto");
    var elementoFilho = elementoPai.lastElementChild;
    
    console.log(elementoFilho);

    while (elementoFilho) {
        elementoPai.removeChild(elementoFilho);
    }
    console.log(elementoPai);

    return console.log(textoJunto);
}

function descriptografar() {
    return console.log("clicou 2");
}