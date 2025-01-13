function gerar(){
    let numero = Number(document.getElementById('Numero').value)
    let tabuada = document.getElementById('tbd')
    let c = 1

    if (numero == '' || numero == null){
        window.alert('Por favor, digite um número!')
    } else{
        tabuada.innerHTML = ''
        for (let c = 1;c <= 10 ;++c){
            tabuada.innerHTML += `<option class='tbditem'>${numero} x ${c} = ${numero*c}</option>`
        }
    }
}