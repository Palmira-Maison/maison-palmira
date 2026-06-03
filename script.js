let carrinho = [];
let total = 0;

function adicionar(nome, preco){

    carrinho.push({
        nome:nome,
        preco:preco
    });

    total += preco;

    atualizar();
}

function atualizar(){

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    carrinho.forEach(item => {

        let li = document.createElement("li");

        li.textContent =
            item.nome + " - €" + item.preco.toFixed(2);

        lista.appendChild(li);
    });

    document.getElementById("total")
        .textContent = total.toFixed(2);
}

function enviarWhatsApp(){

    let mensagem =
    "Olá, gostaria de encomendar:%0A%0A";

    carrinho.forEach(item => {
        mensagem +=
        "- " + item.nome + " (€" +
        item.preco.toFixed(2) + ")%0A";
    });

    mensagem +=
    "%0ATotal: €" + total.toFixed(2);

    window.open(
    "https://wa.me/351912345678?text=" + mensagem,
    "_blank"
    );
}
