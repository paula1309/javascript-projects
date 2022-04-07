const listaVideos = [
    {
        id: 0,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem nostrum at sed voluptates fuga, dolorum modi, doloremque dicta, vel iste praesentium natus veniam soluta aperiam nisi numquam adipisci sunt!",
        thumbnail: "img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem nostrum at sed voluptates fuga, dolorum modi, doloremque dicta, vel iste praesentium natus veniam soluta aperiam nisi numquam adipisci sunt!",
        thumbnail: "img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem nostrum at sed voluptates fuga, dolorum modi, doloremque dicta, vel iste praesentium natus veniam soluta aperiam nisi numquam adipisci sunt!",
        thumbnail: "img/thumb1.webp"
    },
    {
        id: 3,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem nostrum at sed voluptates fuga, dolorum modi, doloremque dicta, vel iste praesentium natus veniam soluta aperiam nisi numquam adipisci sunt!",
        thumbnail: "img/thumb2.webp"
    }
];

let listaDestaque = document.querySelector(".secaoVideosDestaque_lista");
let listaTodosVideos = document.querySelector(".secaoTodosVideos_lista");
let listaAdicionarFila = document.querySelector(".secaoAdicionarFila_lista")

function listarVideos(listaDestaque,) {

    for (let i = 0; i < listaVideos.length; i = i + 1) {
        
        let titulo = listaVideos[i].titulo;
        let visualizacoes = listaVideos[i].visualizacoes;
        let descricao = listaVideos[i].descricao;
        let thumbnail = listaVideos[i].thumbnail;

        criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail);
    }
}

listarVideos(listaDestaque);
listarVideos(listaTodosVideos);


function criarTemplate(listaDestaque, titulo, visualizacoes, descricao, thumbnail) {

    let li = document.createElement("li");
    li.innerHTML = `
    
    <figure>
        <img src="${thumbnail}" alt="${titulo}" />
    </figure>

    <div>
        <h3>${titulo}</h3>
        <span>${visualizacoes}</span>
        <p>
            ${descricao}
        </p>
        <button class="buttonAdicionarAFila">adicionar a fila</button>
    </div>
    
    `

    listaDestaque.appendChild(li)
    
}

listaDestaque.addEventListener("click", adicionarAFila);

function adicionarAFila(event) {

    const buttonName = event.target.tagName;
    const button = event.target;

    if (buttonName == "BUTTON") {
        const li = button.closest("li");

        const liCopy = li.cloneNode(true);
        listaAdicionarFila.appendChild(liCopy);
    }
}

listaAdicionarFila.addEventListener("click", removerFila);

function removerFila (event) {

    const elemento = event.target;
    const elementoName = event.target.tagName;

    if (elementoName !== "LI") {

        elemento.closest("li").remove();
    } else{
        elemento.remove();
    }

}