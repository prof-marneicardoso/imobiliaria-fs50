const linkAPI = "https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis";

// Chama a função (usando Hoisting)
buscarDadosAPI();

function buscarDadosAPI() {
    const idImovel = new URLSearchParams(window.location.search).get("id");
    
    // Acessa a API com os dados
    fetch(`${linkAPI}/${idImovel}`)
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
            mostrarDadosImovel(dados);
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

function mostrarDadosImovel(dados) {
    // Estrutua dos dados do imóvel
    const imovel = document.querySelector("main");

    // Título
    const titulo = document.createElement("h2");
    titulo.textContent = dados.titulo;
    imovel.appendChild(titulo);

    // Imagem
    const img = document.createElement("img");
    img.setAttribute("src", dados.fotos[0]);
    imovel.appendChild(img);

    // Descrição
    const descricao = document.createElement("p");
    descricao.textContent = dados.descricao;
    imovel.appendChild(descricao);

    // Valor
    const valor = document.createElement("h2");
    valor.textContent = dados.valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    imovel.appendChild(valor);

    // Endereço
    const endereco = document.createElement("p");
    endereco.textContent = dados.localizacao;
    imovel.appendChild(endereco);

    // Mapa
    const mapa = document.createElement("iframe");
    mapa.setAttribute("src", dados.mapa);
    imovel.appendChild(mapa);
}
