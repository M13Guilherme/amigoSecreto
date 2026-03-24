let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Por favor, insira um nome!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome duplicado!');
        return;
    }
    amigos.push(amigo.value);

    let itemLista = document.createElement('p');
    itemLista.textContent = amigo.value;
    lista.appendChild(itemLista);
    itemLista.onclick = function () {
        remover(amigo.value, itemLista);
    }
    lista.appendChild(itemLista);

    amigo.value = '';
}

function remover(nome, elemento) {
    amigos.splice(amigos.indexOf(nome), 1);
    elemento.remove();
}

function sortear() {
    if (amigos.length < 3) {
        alert('Adicione ao menos 3 nomes para sorteio!');
        return;

    }
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'

        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}