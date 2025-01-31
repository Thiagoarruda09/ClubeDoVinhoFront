let paginaPrincipal = document.getElementById('paginaPrincipal')



paginaPrincipal.innerHTML = `
${navbar()}
<hr>
`

function alterarConteudo(pagina){
    paginaPrincipal.innerHTML=`
    ${navbar()}
    <hr>
    ${window[pagina]()}`
}


