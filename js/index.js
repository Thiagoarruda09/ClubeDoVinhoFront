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
  if (pagina === "dashboard") {menuAtivo1()
    
  }
 
  if(pagina=== 'cadastrarProduto'){
    menuAtivo5()
    
  }
  if (pagina === "categorias") {Category()
   ;
    createData();
    menuAtivo2();
    search_category();
 
    
  }
  if (pagina === "paises") {Paises();
    menuAtivo4()
  
  }
  if (pagina === "produtos") {Produtos();
    menuAtivo5();
    search_product();
  
  }
  if (pagina === "clientes") {Clientes();
    menuAtivo3()
   
  }
  if (pagina === "pedidos") {Pedidos();
    menuAtivo6()
 
  }
}

function addCategoria() {
  const formulario_categorias = document.getElementById('formulario_categoria');
  const categoria = document.getElementById('categoria');

  if (!formulario_categorias || !categoria) {
    console.warn("Elementos não encontrados.");
    return;
  }

  if (formulario_categorias.style.display === 'none' || formulario_categorias.style.display === '') {
    formulario_categorias.style.display = 'block';
    formulario_categorias.classList.remove('animate__fadeOutRight');
    formulario_categorias.classList.add('animate__fadeInRight');

    categoria.classList.remove('col-10');
    categoria.classList.add('col-7');
  }
}

function voltarParaCategorias(){
  let categoria = document.getElementById('categoria');  
  const formulario_categorias = document.getElementById('formulario_categoria');

  if (!categoria || !formulario_categorias) {
    console.warn("Elementos não encontrados.");
    return;
  }

  if (categoria.classList.contains('col-7')) {
    formulario_categorias.classList.remove('animate__fadeInRight');
    formulario_categorias.classList.add('animate__fadeOutRight')
    ;

    // Aguarda o tempo da animação antes de alterar as classes
    setTimeout(() => {
      formulario_categorias.style.display = "none"; // Opcional: Esconder o formulário
      categoria.classList.remove('col-7');
      categoria.classList.add('col-10');
    }, 500); // Ajuste conforme a duração da animação
  }
}
function search_category(){
  document.getElementById("searchInput").addEventListener("keyup", function() {
      let filter = this.value.toLowerCase();
      let rows = document.querySelectorAll("#table-category tr");
  
      rows.forEach(row => {
          let nome = row.cells[1]?.textContent.toLowerCase();
          let descricao = row.cells[2]?.textContent.toLowerCase();
  
          if (nome.includes(filter) || descricao.includes(filter)) {
              row.style.display = "";
          } else {
              row.style.display = "none";
          }
      });
  });
}






function mudarTemaDeLogin(){

 
  const paginaDeLogin = document.getElementById('paginaDeLogin')

  const svg_sun = document.getElementById('svg_sun')
  const svg_moon = document.getElementById('svg_moon')
  if(paginaDeLogin.style.backgroundColor === '' ){
    paginaDeLogin.style.backgroundColor = '#323539'
    
  }else{
    paginaDeLogin.style.backgroundColor = ''
  }
  
  if (svg_sun.style.display === 'block' || svg_sun.style.display === '') {
    svg_sun.style.display = 'none';
    svg_moon.style.display = 'block';
  } else {
    svg_sun.style.display = 'block';
    svg_moon.style.display = 'none';
  }
}

function mudarTema(){

   const svg_moon = document.getElementById('svg_moon')
   const svg_sun = document.getElementById('svg_sun')
   const body = document.getElementsByTagName('body')

  
 
    
  if(paginaPrincipal.style.backgroundColor === '' || paginaPrincipal.style.backgroundColor === '#efefef'){
 
   body[0].style.backgroundColor = '#323539'
    paginaPrincipal.style.backgroundColor = '#323539'

    
  }else{
    paginaPrincipal.style.backgroundColor = ''
    body[0].style.backgroundColor = ''}
  
    if (svg_sun.style.display === 'block' || svg_sun.style.display === '') {
      svg_sun.style.display = 'none';
      svg_moon.style.display = 'block';
    } else {
      svg_sun.style.display = 'block';
      svg_moon.style.display = 'none';
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
 fetch("http://localhost:3000/Categorias")
    .then((res) => res.json())
    .then((categorias) => {
      categorias.forEach((categoria) => {
        table.innerHTML += `
                <tr>
                    <td>${categoria.id}</td>
                    <td>${categoria.nome}</td>
                    <td>${categoria.descricao}</td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm">${SVG_EDITAR} Editar</a>
                        <a href="#" class="btn gradient text-light btn-sm">${SVG_DELETE} Excluir</a>
                    </td>
                </tr>
            `;
      });
      
    })

  // Adiciona as categorias à tabela
  
}
function addcategory(){
  
}

   






// Função para exibir países na tabela
function Paises() {
  const TABLE2 = document.getElementById("table-paises");
      fetch("http://localhost:3000/paises")
    .then((res) => res.json())
    .then((paises) => {
      paises.forEach((pais) => {
        TABLE2.innerHTML += `
           <tr>
                      <td>${pais.id}</td>
                      <td><img src="${pais.bandeira}" alt="" width="30px"> ${pais.nome}</td>
                      <td>
                        <a href="" class="btn btn-warning btn-sm">${SVG_EDITAR} Editar</a>
                        <a href="" class="btn gradient text-light btn-sm">${SVG_DELETE} Excluir</a>
                      </td>
                    </tr>
          `;
      });
    })

  // Adiciona os países à tabela
  
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

  fetch("http://localhost:3000/produtos")
    .then((res) => res.json())
    .then((produtos) => {
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
                      <a href="" class="btn btn-warning btn-sm">${SVG_EDITAR} Editar</a>
                      <a href="" class="btn gradient text-light btn-sm">${SVG_DELETE} Excluir</a>
                    </td>
                  </tr>
            `;
      });
    })

  // Adiciona os produtos à tabela
 
}

function search_product(){
  document.getElementById("searchInput").addEventListener("keyup", function() {
    let searchTerm = this.value.toLowerCase();
    let rows = document.querySelectorAll("#table-produtos tr");

    rows.forEach(row => {
        let nome = row.children[1]?.textContent.toLowerCase() || "";
        let descricao = row.children[3]?.textContent.toLowerCase() || "";

        if (nome.includes(searchTerm) || descricao.includes(searchTerm)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

}
// Função para exibir clientes na tabela 


function Clientes() {
  const TABLE_CLIENTES = document.getElementById("table-clientes");

  let url = "http://localhost:3000/clientes";

  fetch(url) 
    .then(res => res.json()) 
    .then(clientes => {
      for(let i=0; i<=clientes.length; i++){
        TABLE_CLIENTES.innerHTML += `
          <tr>
            <td>${clientes[i].id}</td>
            <td>${clientes[i].nome}</td>
            <td>${clientes[i].email}</td>
            <td>${clientes[i].data_de_cadastro}</td>
            <td>${clientes[i].data_ultimo_pedido}</td>
            <td>
              <a href="#" class="btn btn-warning btn-sm">${SVG_EDITAR} Editar</a>
              <a href="#" class="btn gradient text-light btn-sm">${SVG_DELETE} Excluir</a>
            </td>
          </tr>
        `
      }

 

      // clientes.forEach(cliente => {
      //   TABLE_CLIENTES.innerHTML += `
      //     <tr>
      //       <td>${cliente.id}</td>
      //       <td>${cliente.nome}</td>
      //       <td>${cliente.email}</td>
      //       <td>${cliente.data_cadastro}</td>
      //       <td>${cliente.data_ultimo_pedido}</td>
      //       <td>
      //         <a href="#" class="btn btn-outline-warning btn-sm">${SVG_EDITAR} Editar</a>
      //         <a href="#" class="btn btn-outline-danger btn-sm">${SVG_DELETE} Excluir</a>
      //       </td>
      //     </tr>
      //   `;
      // });
    })
  
}

// Função para exibir pedidos na tabela
function Pedidos() {
  const TABLE_PEDIDOS = document.getElementById("table-pedidos");

  fetch("http://localhost:3000/pedidos")
    .then((res) => res.json())
    .then((pedidos) => {
      pedidos.forEach((pedidos) => {
        TABLE_PEDIDOS.innerHTML += `
            <tr>
                    <td>${pedidos.id}</td>
                    <td>${pedidos.cliente}</td>
                    <td>${pedidos.num_pedido}</td>
                    <td>${pedidos.pedido}</td>
                    <td>
                      <a href="" class="btn btn-warning btn-sm">${SVG_EDITAR} Editar</a>
                      <a href="" class="btn gradient text-light btn-sm">${SVG_DELETE} Excluir</a>
                    </td>
                  </tr>
            `;
      });
    })
//   Adiciona os pedidos à tabela
  
}


function menuAtivo1(){
  const nav_link_1 = document.getElementById("nav_link_1").classList.add("gradient_button");
}
function menuAtivo2(){
  const nav_link_2 = document.getElementById("nav_link_2").classList.add("gradient_button");
}
function menuAtivo3(){
  const nav_link_3 = document.getElementById("nav_link_3").classList.add("gradient_button");
}
function menuAtivo4(){
  const nav_link_4 = document.getElementById("nav_link_4").classList.add("gradient_button");
}
function menuAtivo5(){
  const nav_link_5 = document.getElementById("nav_link_5").classList.add("gradient_button");
}
function menuAtivo6(){
  const nav_link_6 = document.getElementById("nav_link_6").classList.add("gradient_button");
}