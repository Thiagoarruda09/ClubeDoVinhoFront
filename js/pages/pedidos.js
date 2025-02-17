function pedidos (){
  return `  
      <hr>
  
  <section class="card  card-body animate__animated animate__fadeInRight bg-white border border-2 border-gray col-8 offset-2">
    <div style="max-height: 400px; overflow-y: auto; overflow-x: auto;">
      <table id="tabela5" class="table table-dark table-striped shadow table-hover ">
        <thead class="table-dark">
          <tr>
            <th>#ID</th>
            <th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>  cliente</th>
            <th>n do pedido</th>
            <th>pedido</th>
      
            <th><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench" viewBox="0 0 16 16">
        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
      </svg> ações</th>
          </tr>
        </thead>
        <tbody id="table-pedidos" >
      
        </tbody>
      </table>
    </div>

  </section>`
}