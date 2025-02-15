const paginaPrincipal = document.getElementById("paginaPrincipal");

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

  if (pagina === "addCategory") {
    createData();
  }

  if (pagina === "categorias") {
    Category();
  }

  if (pagina === "paises") {
    Paises();
  }

  if (pagina === "produtos") {
    Produtos();
  }
}

function createData() {
  addDias();
  addMeses();
  addAnos();
}

function addDias() {
  const selectDia = document.getElementById("select-dia");
  for (let dia = 1; dia <= 31; dia++) {
    selectDia.innerHTML += `<option>${dia}</option>`;
  }
}

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
    selectMes.innerHTML += `<option>${mes}</option>`;
  });
}

function addAnos() {
  const selectAno = document.getElementById("select-ano");
  for (let ano = 2025; ano >= 1950; ano--) {
    if (ano % 2 !== 0) {
      selectAno.innerHTML += `<option>${ano}</option>`;
    }
  }
}

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

  categorias.forEach((categoria) => {
    table.innerHTML += `
            <tr>
                <td>${categoria.id}</td>
                <td>${categoria.nome}</td>
                <td>${categoria.descricao}</td>
                <td>
                    <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
                    <a href="#" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
            </tr>
        `;
  });
}

function Paises() {
  const TABLE2 = document.getElementById("table-paises");

  const paises = [
    { id: 1, nome: "Brasil" },
    { id: 2, nome: "Espanha" },
    { id: 3, nome: "China" },
    { id: 4, nome: "Estados Unidos" },
    { id: 5, nome: "França" },
    { id: 6, nome: "Itália" },
    { id: 7, nome: "Alemanha" },
    { id: 8, nome: "Japão" },
    { id: 9, nome: "Austrália" },
    { id: 10, nome: "Canadá" },
    { id: 11, nome: "México" },
    { id: 12, nome: "Argentina" },
    { id: 13, nome: "Portugal" },
  ];

  paises.forEach((paises) => {
    TABLE2.innerHTML += `
     <tr>
                <td>${paises.id}</td>
                <td>${paises.nome}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
              </tr>
    
    `;
  });
}

function modalImg (nome, imagem){
    document.getElementById('modal-product-name').innerHTML = nome 
    document.getElementById('modal-imagem').src= imagem
  }
function Produtos() {
  const TABLE_PRODUTOS = document.getElementById("table-produtos");

  const produtos = [
    {
      id: 1,
      nome: "Vinho Tinto Malbec",
      imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWvBPb6R-VDDejA3eJMuvATjYwsvFfFp-Dexxa_rFnnFhtuoFpDOpGSVIy0vHJQa5F-lm0Jgh2lwUq-htmVPIHSeILr5KszlhofhkxHTYz4PHaneDIr8NQcnEF4kBA&usqp=CAc",
      descricao: "Vinho argentino encorpado com notas de frutas vermelhas",
      valor: 89.9,
      estoque: 15,
    },
    {
      id: 2,
      nome: "Vinho Branco Chardonnay",
      imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzZzxHmw7nOtF5sUqQI3XDhbtg7QBfxTjjmNGqHqOKxmJPUVabvDfKC93xKyLcTHYY7OGgmRe-QD47juRCpJSqJqfbc76Vi4f4komUadNST-yPXSdq_eMb5dvXeu9bEz_7pp4-oxEANg&usqp=CAc",
      descricao: "Fresco e frutado, perfeito para acompanhar frutos do mar",
      valor: 74.5,
      estoque: 20,
    },
    {
      id: 3,
      nome: "Vinho Rosé Provence",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OMi6HMnTIfUFaFvn43GjXnmCruTUmbjEXQ&s",
      descricao: "Elegante e refrescante, com toques de morango e pêssego",
      valor: 65.99,
      estoque: 18,
    },
    {
      id: 4,
      nome: "Vinho do Porto Tawny",
      imagem:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKNe2HOoW_C9w6jSmm4hRO1lnLWoyJuc14FKtprMlj-BsCzy_7zkRJKj_IbnfKdx_5VMjlDgAhODZaHpWoisyPkASUK4GZJylTmYm4o4jc4ffC73GnecTPYCZTGpe0n0G9ml8SfI1EOw&usqp=CAc",
      descricao: "Vinho licoroso português com notas de caramelo e nozes",
      valor: 129.9,
      estoque: 10,
    },
    {
      id: 5,
      nome: "Vinho Tinto Cabernet Sauvignon",
      imagem:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-f4b5h4QiTg7IjS-PE-gHdZ6XRoqyHgWf3w2YOj1kxPDL8Hs-onDuUdOAsIi5_KnU0gKFYQSAMvgQy7JBR88GqkscBsI8Hm_1HRlsJHTbwm7QOG6JcwCu8qLBWvaU1jzyqoGnr_Tr3p4&usqp=CAc",
      descricao: "Vinho robusto com aroma de especiarias e frutas negras",
      valor: 99.0,
      estoque: 12,
    },
    {
      id: 6,
      nome: "Vinho Branco Sauvignon Blanc",
      imagem:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO8i10DKm1cVkXj1IDfa3wqSK-kQrIt9AYWau5RaSvpaPQ4Ak0CuJlWmod_y3O9V10HM16vSI04N9Cq-963qdrEYsYvisR8oRFXKteYNociVUTOLN7wQ44OO9OZ_d9IHzxAzJPtpbg5-Y&usqp=CAc",
      descricao: "Aromático e cítrico, com notas de maracujá e limão",
      valor: 82.9,
      estoque: 25,
    },
    {
      id: 7,
      nome: "Vinho Tinto Merlot",
      imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBLH3Z7lr5ru1TmN7Uu4L1KaClilOU7GBF6Np-u51ts7IvkjnflTCfgmTJKtTjjGC2lzBFjMJZAVzPf6aV_esphptp36pP-pG-uCEmLovp1cnTaWtxb8D78yPKz5fdvN-H0zhrhA&usqp=CAc",
      descricao: "Macio e frutado, ideal para acompanhar massas e carnes",
      valor: 79.99,
      estoque: 30,
    },
    {
      id: 8,
      nome: "Vinho Tinto Syrah",
      imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgKVrlOzMwVSaI9Dqm8mbzQTUE1RH-s19NRJ5-4WlYwNDQ-D-7Dbl_NlLJ17YOfSyqgrnl_y5i-nrYY29ATZLQBAlpeb1f5nIqNJIDm86O_bepYaJHgpKgDZVsVrpzMN5N9INFoowjBA&usqp=CAc",
      descricao: "Intenso e apimentado, com aroma de frutas escuras",
      valor: 94.5,
      estoque: 14,
    },
    {
      id: 9,
      nome: "Vinho Espumante Brut",
      imagem:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJjikR2pJnhxEhW0kr1gkhcPdiDGXnlYaCTMcKKYDNj8qZn-58SJx7U_MUML-K19x29rXrQSsvkafIVq7ab6NM1KR6cSlFwGDo56n_BOD9rBYDz56gXJj2vitk-AfQhTc6cQBE5w&usqp=CAc",
      descricao: "Refrescante e festivo, com borbulhas finas e elegantes",
      valor: 119.9,
      estoque: 8,
    },
    {
      id: 10,
      nome: "Vinho Tinto Tempranillo",
      imagem:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIalmyXkGPtP8GMIArOdAG9yi6SwtChLJTc8A171useg0rYG69XZ79IKTK5Jdp6ishFIDf9oK0pFryo6UwVx5WwB2UZh_5Mbc85pCSdrzZ2QVvnBtbQF5MJvqsPeAU&usqp=CAc",
      descricao: "Espanhol equilibrado, com notas de baunilha e frutas",
      valor: 89.0,
      estoque: 16,
    },
  ];

  produtos.forEach((produtos) => {
    TABLE_PRODUTOS.innerHTML += `
        <tr>
                <td>${produtos.id}</td>
                <td>${produtos.nome}</td>
              <td><img src="${produtos.imagem}" alt="${produtos.nome}" onclick="modalImg('${produtos.nome}' , '${produtos.imagem}')" width="50" class="rounded" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal"></td>
                <td>${produtos.descricao}</td>
                <td>${produtos.valor}</td>
                <td>${produtos.estoque}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
              </tr>
        `;
  });
}
