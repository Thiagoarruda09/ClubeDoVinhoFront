function navbar(){
    return `
      <nav class="text-end">
        <button onClick="alterarConteudo('dashboard')" class="btn btn-outline-dark">Dashboard</button>
        <button onClick="alterarConteudo('categorias')" class="btn btn-outline-dark">Categorias</button>
        <button onClick="alterarConteudo('clientes')" class="btn btn-outline-dark">Clientes</button>
        <button onClick="alterarConteudo('paises')" class="btn btn-outline-dark">paises</button>
        <button onClick="alterarConteudo('produtos')" class="btn btn-outline-dark">produtos</button>
        <button onClick="alterarConteudo('pedidos')" class="btn btn-outline-dark">pedidos</button>
<<<<<<< HEAD
       <a href="index.html"><button  class="btn btn-danger">Sair</button></a>
=======
        <a href="index.html"><button  class="btn btn-danger">Sair</button></a>
>>>>>>> 14d51be75239f9e19af66a8d5054e4e9d2f24d8e
    </nav>`
}