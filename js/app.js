
// const linkAPI = "https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis";
const linkAPI = "https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis";

// Mostra o carregamento
document.querySelector(".loader").style.display = "flex";

setTimeout(() => {
    buscarDadosAPI();
}, 1000); // 1000 mili == 1 segundo

// buscarDadosAPI(); // Chama a função (usando Hoisting)

function buscarDadosAPI() {
    // Acessa a API com os dados
    fetch(linkAPI)
        // Retorna os dados encontrados
        .then((response) => {
            if (response.status == 404) {
                throw new Error('Dados não encontrados');
            }

            // Converte para JSON
            return response.json()
        })
        // Mostra os dados
        .then((dados) => {
            // console.log(dados);
            criarCardImovel(dados);
        })
        .catch((erro) => {
            // Captura qualquer erro (404, problemas de rede, etc.)
            console.error('Erro ao buscar dados:', erro.message);
        })
        .finally(() => {
            // Fecha o carregamento
            document.querySelector(".loader").style.display = "none";
        });

}

function criarCardImovel(listaImoveis) {
    // Percorre a lista de imóveis e cria os cards
    listaImoveis.forEach((imovel) => {

    // Cria o card do imóvel
    const cardImovel = document.createElement("article");
    cardImovel.classList.add("imovel");
    // Adiciona o card na lista (na tela)
    document.querySelector("#imoveis").appendChild(cardImovel);

    // Foto
    const divFoto = document.createElement("div");
    divFoto.classList.add("foto");
    cardImovel.appendChild(divFoto); // Adiciona a foto no card

    const img = document.createElement("img");
    img.setAttribute("src", imovel.fotos[0]);
    divFoto.appendChild(img);

    // Conteúdo
    const divConteudo = document.createElement("div");
    divConteudo.classList.add("conteudo");
    cardImovel.appendChild(divConteudo); // Adiciona o conteúdo no card

    const titulo = document.createElement("h3");
    titulo.textContent = imovel.titulo;
    divConteudo.appendChild(titulo);

    const descricao = document.createElement("p");
    descricao.textContent = imovel.descricao;
    divConteudo.appendChild(descricao);

    // Info
    const divInfo = document.createElement("div");
    divInfo.classList.add("info");
    cardImovel.appendChild(divInfo); // Adiciona a info no card

    const divDados = document.createElement("div");
    divInfo.appendChild(divDados);

        const localizacao = document.createElement("div");
        localizacao.textContent = `Localização: ${imovel.localizacao}`;
        divDados.appendChild(localizacao);

        const quartos = document.createElement("div");
        quartos.textContent = `Quartos: ${imovel.quartos}`;
        divDados.appendChild(quartos);

        const area = document.createElement("span");
        area.textContent = `Área: ${imovel.area} m²`;
        divDados.appendChild(area);

        const valor = document.createElement("div");
        valor.classList.add("valor-imovel");
        valor.textContent = `${imovel.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })}`;
        divDados.appendChild(valor);
    });
}
