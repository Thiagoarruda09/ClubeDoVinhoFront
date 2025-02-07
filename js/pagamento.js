const INPUT_NUMERO = document.getElementById("card-numero");
const INPUT_TITULAR = document.getElementById("card-nome");
const INPUT_CVV = document.getElementById("card-cvv");
const SELECT_MES = document.getElementById("card-mes");
const SELECT_ANO = document.getElementById("card-ano");
const RESULT_NUMERO = document.getElementById("result-numero");
const RESULT_NOME = document.getElementById("result-nome");
const RESULT_ANO = document.getElementById("result-ano");
const RESULT_MES = document.getElementById("result-mes");
const BANDEIRA_VISA = document.getElementById("bandeira-visa");
const BANDEIRA_MASTER = document.getElementById("bandeira-master");
const RESULT_CVV = document.getElementById("result-cvv");
const RESULT_DATA = document.getElementById("result-data");

let hoje = new Date();

let anoFim = hoje.getFullYear() + 10;

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
  SELECT_ANO.innerHTML += `<option> ${ano} </option>`;
}

let meses = [
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

let i = 0;

do {
  SELECT_MES.innerHTML += `<option>${meses[i]}</option>`;
  i++;
} while (i < meses.length);

function preencherNumero() {
  RESULT_NUMERO.innerHTML = INPUT_NUMERO.value;
}

function preencherNome() {
  RESULT_NOME.innerHTML = INPUT_TITULAR.value;
}
function preencherAno() {
  RESULT_ANO.innerHTML = SELECT_ANO.value;
}

function preencherMes() {
  let m = SELECT_MES.selectedIndex;

  if (m < 10) {
    RESULT_MES.innerHTML = "0" + m;
  } else {
    RESULT_MES.innerHTML = m;
  }
}

// function removerUltimoDigito(numero){
//   return numero.substr(0,numero.lenght - 1)

// } 

function formatarNumeroDoCartao() {
  let valor = INPUT_NUMERO.value.replace(/\D/g, "");
  let formatado = valor.match(/.{1,4}/g)?.join(" ") || "";
  let primeirosDigitos = parseInt(valor.slice(0, 4));
  let CARTAO = document.getElementById('cartao')

  let cartaoVerso = document.getElementById('cartao-verso')

  INPUT_NUMERO.value = formatado;

  if (INPUT_NUMERO.value.startsWith("4")) {
    BANDEIRA_VISA.style.display = "block";
    CARTAO.style.backgroundColor= "#1632C7"
    cartaoVerso.style.backgroundColor="#1632C7"
   
   
  } else {
    BANDEIRA_VISA.style.display = "none";
    CARTAO.style.backgroundColor="#121212"
  }

  if (
    (primeirosDigitos >= 5099 && primeirosDigitos <= 5599)
  ) {
    BANDEIRA_MASTER.style.display = "block";
    CARTAO.style.backgroundColor="#F36000"
    cartaoVerso.style.backgroundColor="#F36000"
  } else {
    BANDEIRA_MASTER.style.display = "none";
   
  }
}


function preencherCvv() {

  RESULT_CVV.innerHTML = INPUT_CVV.value;
}

function mostrarFrente(){
  let cartao = document.getElementById('cartao')
  let cartaoVerso = document.getElementById('cartao-verso')
  cartaoVerso.style.display="none"
  cartao.style.display='block'

}

function mostrarVerso(){
  let cartao = document.getElementById('cartao')
  let cartaoVerso = document.getElementById('cartao-verso')
  cartaoVerso.style.display="block"
  cartao.style.display='none'

}