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
    
    if (pagina === "adicionarCategoria") {
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
    const categorias = [
        { id: 1, nome: "espumante", descricao: "desc do espumante" },
        { id: 2, nome: "branco", descricao: "vinho de uvas brancas" },
        { id: 3, nome: "verde", descricao: "vinho de uvas verdes" },
        { id: 4, nome: "tinto", descricao: "vinho de uvas tintas" },
        { id: 5, nome: "rosé", descricao: "vinho rosado" },
        { id: 6, nome: "suave", descricao: "vinho de sabor adocicado" },
        { id: 7, nome: "seco", descricao: "vinho com menos açúcar residual" },
        { id: 8, nome: "fortificado", descricao: "vinho com adição de aguardente vínica" },
        { id: 9, nome: "orgânico", descricao: "vinho produzido sem pesticidas sintéticos" },
        { id: 10, nome: "biodinâmico", descricao: "vinho feito seguindo práticas biodinâmicas" }
    ];
    
    categorias.forEach(categoria => {
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
        { id: 13, nome: "Portugal" }
    ];

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