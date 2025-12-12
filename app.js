let contador = 0;

function criarOcorrencia() {
    const pedido = document.getElementById("pedido").value;
    const cliente = document.getElementById("cliente").value;
    const tipo = document.getElementById("tipo").value;
    const transportadora = document.getElementById("transportadora").value;
    const descricao = document.getElementById("descricao").value;

    contador++;

    const card = document.createElement("div");
    card.id = "card" + contador;
    card.className = "card";
    card.draggable = true;
    card.ondragstart = drag;

    card.innerHTML = `
        <b>Pedido:</b> ${pedido}<br>
        <b>Cliente:</b> ${cliente}<br>
        <b>Tipo:</b> ${tipo}<br>
        <b>Transportadora:</b> ${transportadora}<br>
        <p>${descricao}</p>
    `;

    document.getElementById("nova").appendChild(card);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("id");
    ev.target.appendChild(document.getElementById(id));
}
