const paginaPrincipal = document.getElementById("paginaPrincipal");
const SVG_EDITAR = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>`;
const SVG_DELETE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-x" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708"/>
</svg>`;

// Renderiza a página inicial
paginaPrincipal.innerHTML = `
    ${navbar()}
    <hr>
`;

function alterarConteudo(pagina) {
  paginaPrincipal.innerHTML = `
        ${navbar()}
        <hr>
        ${window[pagina]()}
    `;

  // Funções específicas chamadas conforme a página
  if (pagina === "dashboard") {menuAtivo1()}
  if (pagina === "addCategory") {createData();
    menuAtivo2()
  
  }
  if (pagina === "categorias") {Category();
    menuAtivo2()
    
  }
  if (pagina === "paises") {Paises();
    menuAtivo4()
  }
  if (pagina === "produtos") {Produtos();
    menuAtivo5()
  }
  if (pagina === "clientes") {Clientes();
    menuAtivo3()
  }
  if (pagina === "pedidos") {Pedidos();
    menuAtivo6()
  }
}

// Função para gerar os dados de seleção de data
function createData() {
  addDias(); // Adiciona os dias ao seletor
  addMeses(); // Adiciona os meses ao seletor
  addAnos(); // Adiciona os anos ao seletor
}

// Função que adiciona os dias ao seletor de data
function addDias() {
  const selectDia = document.getElementById("select-dia");
  for (let dia = 1; dia <= 31; dia++) {
    selectDia.innerHTML += `<option>${dia}</option>`; // Adiciona cada dia como uma opção
  }
}

// Função que adiciona os meses ao seletor de data
function addMeses() {
  const selectMes = document.getElementById("select-mes");
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  meses.forEach((mes) => {
    selectMes.innerHTML += `<option>${mes}</option>`; // Adiciona cada mês como uma opção
  });
}

// Função que adiciona os anos ao seletor de data
function addAnos() {
  const selectAno = document.getElementById("select-ano");
  for (let ano = 2025; ano >= 1950; ano--) {
    if (ano % 2 !== 0) {
      // Filtra apenas anos ímpares
      selectAno.innerHTML += `<option>${ano}</option>`; // Adiciona o ano como opção
    }
  }
}

// Função para exibir categorias de produtos
function Category() {
  const table = document.getElementById("table-category");
  const categorias = [
    { id: 1, nome: "espumante", descricao: "desc do espumante" },
    { id: 2, nome: "branco", descricao: "vinho de uvas brancas" },
    { id: 3, nome: "verde", descricao: "vinho de uvas verdes" },
    { id: 4, nome: "tinto", descricao: "vinho de uvas tintas" },
    { id: 5, nome: "rosé", descricao: "vinho rosado" },
    { id: 6, nome: "suave", descricao: "vinho de sabor adocicado" },
    { id: 7, nome: "seco", descricao: "vinho com menos açúcar residual" },
    {
      id: 8,
      nome: "fortificado",
      descricao: "vinho com adição de aguardente vínica",
    },
    {
      id: 9,
      nome: "orgânico",
      descricao: "vinho produzido sem pesticidas sintéticos",
    },
    {
      id: 10,
      nome: "biodinâmico",
      descricao: "vinho feito seguindo práticas biodinâmicas",
    },
  ];

  // Adiciona as categorias à tabela
  categorias.forEach((categoria) => {
    table.innerHTML += `
            <tr>
                <td>${categoria.id}</td>
                <td>${categoria.nome}</td>
                <td>${categoria.descricao}</td>
                <td>
                    <a href="#" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
                    <a href="#" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
                </td>
            </tr>
        `;
  });
}

// Função para exibir países na tabela
function Paises() {
  const TABLE2 = document.getElementById("table-paises");
  const paises = [
    {
      id: 1,
      nome: "Brasil",
      bandeira:
        "https://em-content.zobj.net/source/apple/51/flag-for-brazil_1f1e7-1f1f7.png",
    },
    {
      id: 2,
      nome: "Espanha",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-spain_1f1ea-1f1f8.png",
    },
    {
      id: 3,
      nome: "China",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-china_1f1e8-1f1f3.png",
    },
    {
      id: 4,
      nome: "Estados Unidos",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-united-states_1f1fa-1f1f8.png",
    },
    {
      id: 5,
      nome: "França",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-france_1f1eb-1f1f7.png",
    },
    {
      id: 6,
      nome: "Alemanha",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-germany_1f1e9-1f1ea.png",
    },
    {
      id: 7,
      nome: "Japão",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-japan_1f1ef-1f1f5.png",
    },
    {
      id: 8,
      nome: "Índia",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-india_1f1ee-1f1f3.png",
    },
    {
      id: 9,
      nome: "México",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-mexico_1f1f2-1f1fd.png",
    },
    {
      id: 10,
      nome: "Itália",
      bandeira:
        "https://em-content.zobj.net/source/apple/391/flag-italy_1f1ee-1f1f9.png",
    },
  ];

  // Adiciona os países à tabela
  paises.forEach((pais) => {
    TABLE2.innerHTML += `
       <tr>
                  <td>${pais.id}</td>
                  <td><img src="${pais.bandeira}" alt="" width="30px"> ${pais.nome}</td>
                  <td>
                    <a href="" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
                    <a href="" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
                  </td>
                </tr>
      `;
  });
}

// Função que exibe a imagem do produto no modal
function modalImg(nome, imagem, descricao) {
  document.getElementById("modal-product-name").innerHTML = nome;
  document.getElementById("modal-imagem").src = imagem;
  document.getElementById("modal-product-desc").innerHTML = descricao;
}
// Função para renderizar os produtos na tabela
function Produtos() {
  const TABLE_PRODUTOS = document.getElementById("table-produtos");

  const produtos = [
    {
      id: 1,
      nome: "Vinho Tinto Malbec",
      imagem:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWvBPb6R-VDDejA3eJMuvATjYwsvFfFp-Dexxa_rFnnFhtuoFpDOpGSVIy0vHJQa5F-lm0Jgh2lwUq-htmVPIHSeILr5KszlhofhkxHTYz4PHaneDIr8NQcnEF4kBA&usqp=CAc",
      descricao: "Vinho argentino encorpado com notas de frutas vermelhas",
      valor: 89.9,
      estoque: 15,
    },
    {
      id: 2,
      nome: "Vinho Branco Chardonnay",
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzZzxHmw7nOtF5sUqQI3XDhbtg7QBfxTjjmNGqHqOKxmJPUVabvDfKC93xKyLcTHYY7OGgmRe-QD47juRCpJSqJqfbc76Vi4f4komUadNST-yPXSdq_eMb5dvXeu9bEz_7pp4-oxEANg&usqp=CAc",
      descricao: "Fresco e frutado, perfeito para acompanhar frutos do mar",
      valor: 74.5,
      estoque: 20,
    },
    {
      id: 3,
      nome: "Vinho Rosé Provence",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OMi6HMnTIfUFaFvn43GjXnmCruTUmbjEXQ&s",
      descricao: "Elegante e refrescante, com toques de morango e pêssego",
      valor: 65.99,
      estoque: 18,
    },
    {
      id: 4,
      nome: "Vinho do Porto Tawny",
      imagem:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKNe2HOoW_C9w6jSmm4hRO1lnLWoyJuc14FKtprMlj-BsCzy_7zkRJKj_IbnfKdx_5VMjlDgAhODZaHpWoisyPkASUK4GZJylTmYm4o4jc4ffC73GnecTPYCZTGpe0n0G9ml8SfI1EOw&usqp=CAc",
      descricao: "Vinho licoroso português com notas de caramelo e nozes",
      valor: 129.9,
      estoque: 10,
    },
    {
      id: 5,
      nome: "Vinho Tinto Cabernet Sauvignon",
      imagem:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-f4b5h4QiTg7IjS-PE-gHdZ6XRoqyHgWf3w2YOj1kxPDL8Hs-onDuUdOAsIi5_KnU0gKFYQSAMvgQy7JBR88GqkscBsI8Hm_1HRlsJHTbwm7QOG6JcwCu8qLBWvaU1jzyqoGnr_Tr3p4&usqp=CAc",
      descricao: "Vinho robusto com aroma de especiarias e frutas negras",
      valor: 99.0,
      estoque: 12,
    },
    {
      id: 6,
      nome: "Vinho Branco Sauvignon Blanc",
      imagem:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO8i10DKm1cVkXj1IDfa3wqSK-kQrIt9AYWau5RaSvpaPQ4Ak0CuJlWmod_y3O9V10HM16vSI04N9Cq-963qdrEYsYvisR8oRFXKteYNociVUTOLN7wQ44OO9OZ_d9IHzxAzJPtpbg5-Y&usqp=CAc",
      descricao: "Aromático e cítrico, com notas de maracujá e limão",
      valor: 82.9,
      estoque: 25,
    },
    {
      id: 7,
      nome: "Vinho Tinto Merlot",
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLH3Z7lr5ru1TmN7Uu4L1KaClilOU7GBF6Np-u51ts7IvkjnflTCfgmTJKtTjjGC2lzBFjMJZAVzPf6aV_esphptp36pP-pG-uCEmLovp1cnTaWtxb8D78yPKz5fdvN-H0zhrhA&usqp=CAc",
      descricao: "Macio e frutado, ideal para acompanhar massas e carnes",
      valor: 79.99,
      estoque: 30,
    },
    {
      id: 8,
      nome: "Vinho Tinto Syrah",
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgKVrlOzMwVSaI9Dqm8mbzQTUE1RH-s19NRJ5-4WlYwNDQ-D-7Dbl_NlLJ17YOfSyqgrnl_y5i-nrYY29ATZLQBAlpeb1f5nIqNJIDm86O_bepYaJHgpKgDZVsVrpzMN5N9INFoowjBA&usqp=CAc",
      descricao: "Intenso e apimentado, com aroma de frutas escuras",
      valor: 94.5,
      estoque: 14,
    },
    {
      id: 9,
      nome: "Vinho Espumante Brut",
      imagem:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJjikR2pJnhxEhW0kr1gkhcPdiDGXnlYaCTMcKKYDNj8qZn-58SJx7U_MUML-K19x29rXrQSsvkafIVq7ab6NM1KR6cSlFwGDo56n_BOD9rBYDz56gXJj2vitk-AfQhTc6cQBE5w&usqp=CAc",
      descricao: "Refrescante e festivo, com borbulhas finas e elegantes",
      valor: 119.9,
      estoque: 8,
    },
    {
      id: 10,
      nome: "Vinho Tinto Tempranillo",
      imagem:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIalmyXkGPtP8GMIArOdAG9yi6SwtChLJTc8A171useg0rYG69XZ79IKTK5Jdp6ishFIDf9oK0pFryo6UwVx5WwB2UZh_5Mbc85pCSdrzZ2QVvnBtbQF5MJvqsPeAU&usqp=CAc",
      descricao: "Espanhol equilibrado, com notas de baunilha e frutas",
      valor: 89.0,
      estoque: 16,
    },
  ];

  // Adiciona os produtos à tabela
  produtos.forEach((produtos) => {
    TABLE_PRODUTOS.innerHTML += `
        <tr>
                <td>${produtos.id}</td>
                <td>${produtos.nome}</td>
              <td><img src="${produtos.imagem}" alt="${produtos.nome}" onclick="modalImg('${produtos.nome}' , '${produtos.imagem}', '${produtos.descricao}')" width="50" class="rounded" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal"></td>
                <td style="font-size: 14px;">${produtos.descricao}</td>
                <td>${produtos.valor}</td>
                <td>${produtos.estoque}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
                </td>
              </tr>
        `;
  });
}
// Função para exibir clientes na tabela 
function Clientes() {
  const TABLE_CLIENTES = document.getElementById("table-clientes");
  const clientes = [
    
    {id: 1, nome: "José", sobrenome: "Roberto", endereco: "Rua Fictícia, Nº 5", email: "joseroberto@email.com",},
    {id: 2,nome: "Maria",sobrenome: "Fernandes",endereco: "Avenida Brasil, Nº 120",email: "mariafernandes@email.com"},
    {id: 3,nome: "Carlos",sobrenome: "Silva",endereco: "Rua das Palmeiras, Nº 34",email: "carlossilva@email.com"},
    {id: 4,nome: "Ana",sobrenome: "Oliveira",endereco: "Praça Central, Nº 10",email: "anaoliveira@email.com"},
    {id: 5,nome: "Fernanda",sobrenome: "Santos",endereco: "Rua da Esperança, Nº 78",email: "fernandasantos@email.com"},
    {id: 6,nome: "Pedro",sobrenome: "Almeida",endereco: "Travessa das Flores, Nº 22",email: "pedroalmeida@email.com"},
    {id: 7,nome: "Lucas",sobrenome: "Mendes",endereco: "Estrada Velha, Nº 99",email: "lucasmendes@email.com"},
    {id: 8,nome: "Juliana",sobrenome: "Pereira",endereco: "Rua do Sol, Nº 15",email: "julianapereira@email.com"},
    {id: 9,nome: "Rafael",sobrenome: "Lima",endereco: "Alameda dos Anjos, Nº 5",email: "rafaellima@email.com"},
    {id: 10,nome: "Camila",sobrenome: "Rodrigues",endereco: "Rua Bela Vista, Nº 50",email: "camilarodrigues@email.com"},
  ];
// Adiciona os clientes à tabela
  clientes.forEach((clientes) => {
    TABLE_CLIENTES.innerHTML += `
        <tr>
                <td>${clientes.id}</td>
                <td>${clientes.nome}</td>
                <td>${clientes.sobrenome}</td>
                <td>${clientes.endereco}</td>
                <td>${clientes.email}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
                </td>
              </tr>
        `;
  });
}
// Função para exibir pedidos na tabela
function Pedidos() {
  const TABLE_PEDIDOS = document.getElementById("table-pedidos");
  const pedidos = [
    { id: 1, cliente: "José Roberto", num_pedido: "2", pedido: "ypioca" },
    { id: 2, cliente: "Maria Fernandes", num_pedido: "3", pedido: "gelo" },
    { id: 3, cliente: "Carlos Silva", num_pedido: "1", pedido: "vinho" },
    { id: 4, cliente: "Ana Oliveira", num_pedido: "4", pedido: "gelo" },
    { id: 5, cliente: "Fernanda Santos", num_pedido: "5", pedido: "vinho" },
    { id: 6, cliente: "Pedro Almeida", num_pedido: "6", pedido: "gelo" },
    { id: 7, cliente: "Lucas Mendes", num_pedido: "7", pedido: "vinho" },
    { id: 8, cliente: "Juliana Pereira", num_pedido: "8", pedido: "gelo" },
    { id: 9, cliente: "Rafael Lima", num_pedido: "9", pedido: "ypioca" },
    { id: 10, cliente: "Camila Rodrigues", num_pedido: "10", pedido: "vinho" },
  ];
//   Adiciona os pedidos à tabela
  pedidos.forEach((pedidos) => {
    TABLE_PEDIDOS.innerHTML += `
        <tr>
                <td>${pedidos.id}</td>
                <td>${pedidos.cliente}</td>
                <td>${pedidos.num_pedido}</td>
                <td>${pedidos.pedido}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
                </td>
              </tr>
        `;
  });
}

function menuAtivo(){
  menuAtivo1();
  menuAtivo2(); 
  menuAtivo3();
  menuAtivo4();
  menuAtivo5(); 
  menuAtivo6();
}
function menuAtivo1(){
  const nav_link_1 = document.getElementById("nav_link_1").classList.add("active");
}
function menuAtivo2(){
  const nav_link_2 = document.getElementById("nav_link_2").classList.add("active");
}
function menuAtivo3(){
  const nav_link_3 = document.getElementById("nav_link_3").classList.add("active");
}
function menuAtivo4(){
  const nav_link_4 = document.getElementById("nav_link_4").classList.add("active");
}
function menuAtivo5(){
  const nav_link_5 = document.getElementById("nav_link_5").classList.add("active");
}
function menuAtivo6(){
  const nav_link_6 = document.getElementById("nav_link_6").classList.add("active");
}