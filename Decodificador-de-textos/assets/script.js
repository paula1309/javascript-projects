
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

    var troca = document.getElementById("exibir-texto");
    troca.innerHTML = '<p>' + textoJunto + '</p>' + '<button> Copiar </button>';
    
    var botao = troca.lastElementChild;
    botao.className = "descriptografar";
    botao.id = "copiar";

    troca.style.display = "flex";
    troca.style.flexDirection = "column";
    troca.style.justifyContent = "space-between";

    botao.style.marginLeft = "40px";
    botao.style.marginBottom = "40px";

    var p = troca.firstElementChild;
    p.id = "texto-criptografado"
    p.style.fontSize = 24 + "px";
    p.style.paddingTop = 50 + "px";
    p.style.lineHeight = 36 + "px";

    botao.addEventListener('click', copiarBotao)

    function copiarBotao() {

        var textoCopia = p.textContent;

        console.log(textoCopia)

        navigator.clipboard
            .writeText(textoCopia)
            .then(() => {
                alert("successfully copied");
            })
            .catch(() => {
                alert("something went wrong");
            });
    }

}

function descriptografar() {
    
    var textoCriptografado = texto.value;

    var letraA = textoCriptografado.replace(/ai/gi, 'a');
    var letraE = letraA.replace(/enter/gi, 'e');
    var letraI = letraE.replace(/imes/gi, 'i');
    var letraO = letraI.replace(/ober/gi, 'o');
    var letraU = letraO.replace(/ufat/gi, 'u');

    var troca = document.getElementById("exibir-texto");
    troca.innerHTML = '<p>' + letraU + '</p>' + '<button> Copiar </button>';

    var p = troca.firstElementChild;
    p.id = "texto-criptografado"
    p.style.fontSize = 24 + "px";
    p.style.paddingTop = 50 + "px";
    p.style.lineHeight = 36 + "px";

    var botao = troca.lastElementChild;
    botao.className = "descriptografar";
    botao.id = "copiar";

    troca.style.display = "flex";
    troca.style.flexDirection = "column";
    troca.style.justifyContent = "space-between";

    botao.style.marginLeft = "40px";
    botao.style.marginBottom = "40px";

    var p = troca.firstElementChild;
    p.id = "texto-criptografado"
    p.style.fontSize = 24 + "px";
    p.style.paddingTop = 50 + "px";
    p.style.lineHeight = 36 + "px";

    botao.addEventListener('click', copiarBotao)

    function copiarBotao() {

        var textoCopia = p.textContent;

        console.log(textoCopia)

        navigator.clipboard
            .writeText(textoCopia)
            .then(() => {
                alert("copiado com sucesso!!");
            })
            .catch(() => {
                alert("algo deu errado!!");
            });
    }

}