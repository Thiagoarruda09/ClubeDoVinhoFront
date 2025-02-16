// Função para enviar category
function enviarCategory() {

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

// Função para enviar produto
function enviarProduct(){

    event.preventDefault()

const product_name = document.getElementById('product_name')
const product_desc = document.getElementById('product_desc')
const product_price = document.getElementById('product_price')
const product_stock = document.getElementById('product_stock')

const erro_product_name = document.getElementById('erro_product_name')              
const erro_product_desc = document.getElementById('erro_product_desc')
const erro_product_price = document.getElementById('erro_product_price')
const erro_product_stock = document.getElementById('erro_product_stock')


if (product_name.value == '') {
    product_name.style.border = '1px solid red'
    erro_product_name.style.display = 'block'
} else {
    product_name.style.border = '1px solid green'
    erro_product_name.style.display = 'none'
}


if (product_desc.value == '') {    
    product_desc.style.border = '1px solid red'
    erro_product_desc.style.display = 'block'
} else {
    product_desc.style.border = '1px solid green'
    erro_product_desc.style.display = 'none'
}


if (product_price.value == '') {
    product_price.style.border = '1px solid red'
    erro_product_price.style.display = 'block'
} else {
    product_price.style.border = '1px solid green'
    erro_product_price.style.display = 'none'
}


if (product_stock.value == '') {
    product_stock.style.border = '1px solid red'
    erro_product_stock.style.display = 'block'
} else {
    product_stock.style.border = '1px solid green'
    erro_product_stock.style.display = 'none'
}

} 
function formatarValor(){
    const product_price = document.getElementById('product_price')
    let valor = product_price.value.replace(/\D/g, "");
    product_price.value=valor
}



   

