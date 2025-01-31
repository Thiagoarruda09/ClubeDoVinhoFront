function enviar() {

    event.preventDefault()

    let input_nome = document.getElementById('nome');

    let input_descricao = document.getElementById('descricao')

    let erro_nome = document.getElementById('erro_nome')

    let erro_descricao = document.getElementById('erro_descricao')



    if (input_nome.value == '') {
        input_nome.style.border = '1px solid red'
        erro_nome.style.display = 'block'
    } else {
        input_nome.style.border = '1px solid green'
        erro_nome.style.display = 'none'

    }


    if (input_descricao.value == '') {
        input_descricao.style.border = '1px solid red'
        document.getElementById('erro_descricao').style.display = 'block'
    } else {
        input_descricao.style.border = '1px solid green'
        erro_descricao.style.display = 'none'
    }


}

