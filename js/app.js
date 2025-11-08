
// Simula um JSON online (vindos de uma API ou Banco de Dados)
const listaImoveis = [
    {
        id: 1,
        titulo: "Apart. 3 dorm. Papicu",
        descricao: "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.",
        valor: 800000,
        area: 90,
        tipo: "apartemento", // casa, apartamento, terreno
        localizacao: "Santos Dummont, Papicu",
        mapa: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3752203335343!2d-38.52586952782257!3d-3.728109443164852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74881b09b88ef%3A0xe6f7c3f410959f98!2sAv.%20Santos%20Dumont!5e0!3m2!1spt-BR!2sbr!4v1729100381171!5m2!1spt-BR!2sbr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
        venda_aluguel: "venda", // venda, aluguel
        finalidade: "residencial", // comercial, residencial
        fotos: [
            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg', // padrão [0]
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360',
        ],
        status: true, // true = disponível, false = indisponível
    },


    {
        id: 1,
        titulo: "Apart. 3 dorm. Papicu",
        descricao: "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.",
        valor: 800000,
        area: 90,
        tipo: "apartemento", // casa, apartamento, terreno
        localizacao: "Santos Dummont, Papicu",
        mapa: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3752203335343!2d-38.52586952782257!3d-3.728109443164852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74881b09b88ef%3A0xe6f7c3f410959f98!2sAv.%20Santos%20Dumont!5e0!3m2!1spt-BR!2sbr!4v1729100381171!5m2!1spt-BR!2sbr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
        venda_aluguel: "venda", // venda, aluguel
        finalidade: "residencial", // comercial, residencial
        fotos: [
            'https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg', // padrão [0]
            'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360',
        ],
        status: true, // true = disponível, false = indisponível
    }
];

// Percorre a lista de imóveis e cria os cards
listaImoveis.forEach((imovel) => {
    // console.log(imovel);

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
});