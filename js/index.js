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
        addCategory();
    }

    if (pagina === "paises") {
        addPaises()
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
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    
    meses.forEach(mes => {
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

function addCategory() {
    const table = document.getElementById("table-category");
    const dados = [
        { id: 1, nome: "espumante", descricao: "desc do espumante" },
        { id: 2, nome: "branco", descricao: "vinho de uvas brancas" },
        { id: 3, nome: "verde", descricao: "vinho de uvas verdes" }
    ];
    
    dados.forEach(categoria => {
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

function addPaises(){
    const TABLE2 = document.getElementById('table-paises')


let paises = [
    {
        id:1,
        nome:"brasil",
       
    },
    {
        id:2,
        nome:"espanha",
        
    },
    {
        id:3,
        nome:"china",
        
    }
]

paises.forEach((paises)=>{
    TABLE2.innerHTML+=`
     <tr>
                <td>${paises.id}</td>
                <td>${paises.nome}</td>
                <td>
                  <a href="" class="btn btn-outline-warning btn-sm">Editar</a>
                  <a href="" class="btn btn-outline-danger btn-sm">Excluir</a>
                </td>
              </tr>
    
    `
    
})

}