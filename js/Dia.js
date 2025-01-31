

const SELECT_DIA = document.getElementById('select-dia')
const SELECT_MES = document.getElementById('select-mes')
const SELECT_ANO = document.getElementById('select-ano')

event.preventDefault()

// -----------------DIA---------------------
let dia = 1;

while (dia <= 31) {

    SELECT_DIA.innerHTML += `<option> ${dia} </option>`
    dia++;
}

// --------------------MÊS----------------

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


// ----------------ANO------------------

for (let ano = 2025; ano >= 1950; ano--) {
    if (ano % 2 !== 0) {
        SELECT_ANO.innerHTML += `<option> ${ano} </option>`
    }

}
