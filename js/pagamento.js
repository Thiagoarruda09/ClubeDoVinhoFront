const INPUT_NUMERO=document.getElementById('card-numero')
const INPUT_TITULAR=document.getElementById('card-nome')
const INPUT_CVV=document.getElementById('card-cvv')
const SELECT_MES=document.getElementById('card-mes')
const SELECT_ANO=document.getElementById('card-ano')
const RESULT_NUMERO=document.getElementById('result-numero')
const RESULT_NOME=document.getElementById('result-nome')
const RESULT_ANO=document.getElementById('result-ano')
const RESULT_MES=document.getElementById('result-mes')


let hoje = new Date()

let anoFim = hoje.getFullYear() + 10

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
   
        SELECT_ANO.innerHTML += `<option> ${ano} </option>`
  }

let meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro']

    let i=0

    do {
        SELECT_MES.innerHTML += `<option>${meses[i]}</option>`
        i++
    
    } while (i<meses.length);

    function preencherNumero(){
        RESULT_NUMERO.innerHTML = INPUT_NUMERO.value
    }

    function preencherNome(){
        RESULT_NOME.innerHTML = INPUT_TITULAR.value
    }
    function preencherAno(){
      RESULT_ANO.innerHTML = SELECT_ANO.value

    }

    function preencherMes(){

        let m = SELECT_MES.selectedIndex;

        if(m < 10){
            RESULT_MES.innerHTML= "0" + m
        } else{
            RESULT_MES.innerHTML= m
        }

    }
  