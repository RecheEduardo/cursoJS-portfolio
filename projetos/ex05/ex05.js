let numarray = []
let res = document.getElementById('resultado')
let arrayselect = document.getElementById('num')

function adicionar(){
    let valoradd = parseInt(document.getElementById('Numero').value)
    
    if (valoradd < 1 || valoradd > 100 || isNaN(valoradd) || numarray.includes(valoradd)){
        window.alert('Valor inválido ou já adicionado!')
        return
    }else{
        numarray.push(valoradd)
        arrayselect.innerHTML = ''
        for (let c = 0; c < numarray.length; c++){
            arrayselect.innerHTML += `<option>Valor ${numarray[c]} adicionado.</option>`
        }
        res.innerHTML = ``
        document.getElementById('Numero').value = ''
        document.getElementById('Numero').focus()
    }
}

function gerar(){
    if (numarray.length == 0){
        window.alert('Adicione valores antes de finalizar!')
        return
    }
    else{
        res.style.display = 'block'
        res.innerHTML = ``
        res.innerHTML += `Ao todo, temos <strong>${numarray.length}</strong> números cadastrados`
        res.innerHTML += `<br><br>O menor número cadastrado foi <strong>${Math.min(...numarray)}</strong>`
        res.innerHTML += `<br><br>O maior número cadastrado foi <strong>${Math.max(...numarray)}</strong>`

        let soma = 0
        for (let c = 0; c < numarray.length; c++){
            soma += numarray[c]
        }
        res.innerHTML += `<br><br>A soma dos números resulta em <strong>${soma}</strong>`
        res.innerHTML += `<br><br>A média dos números resulta em <strong>${(soma/numarray.length).toFixed(2)}</strong>`
    }
}

function limpar(){
    numarray = []
    res.innerHTML = ``
    arrayselect.innerHTML = ``
}