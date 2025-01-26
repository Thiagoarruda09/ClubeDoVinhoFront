function navbar(){
    return `
      <nav class="text-end">
        <button onClick="alterarConteudo('dashboard')" class="btn btn-dark">Dashboard</button>
        <button onClick="alterarConteudo('categorias')" class="btn btn-outline-dark">Categorias</button>
        <button onClick="alterarConteudo('clientes')" class="btn btn-outline-dark">Clientes</button>
        <button onClick="alterarConteudo('paises')" class="btn btn-outline-dark">paises</button>
        <button onClick="alterarConteudo('produtos')" class="btn btn-outline-dark">produtos</button>
        <button onClick="alterarConteudo('pedidos')" class="btn btn-outline-dark">pedidos</button>
        <button onClick="alterarConteudo('')" class="btn btn-danger">Sair</button>
    </nav>`
}