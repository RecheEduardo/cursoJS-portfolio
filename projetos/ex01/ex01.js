var horas = new Date()
var horasdia = horas.getHours()
var minutosdia = horas.getMinutes()
var horashtml = document.getElementById('hrs')
var mensagem = document.getElementById('hoursmsg')
var imagemdia = document.getElementById('imghora')

horashtml.innerHTML = horasdia
horashtml.innerHTML += ' horas e '
horashtml.innerHTML += minutosdia
horashtml.innerHTML += ' minutos!'

if (horasdia >= 18 && horasdia <= 23) {
    mensagem.innerHTML = 'Boa noite!'
    document.body.style.backgroundColor = 'rgb(5, 28, 49)'
    imghora.innerHTML = '<img src="moon.png" width="250">'
} else if (horasdia <= 5){
    mensagem.innerHTML = 'Boa madrugada!'
    document.body.style.backgroundColor = 'rgb(7, 15, 22)'
    imghora.innerHTML = '<img src="moon.png" width="250">'

} else if (horasdia <= 12){
    mensagem.innerHTML = 'Bom dia!'
    document.body.style.backgroundColor = '#457ab6'
    document.body.style.color = 'white'
    document.querySelector('.container').style.backgroundColor = '#82b2e8'
    imghora.innerHTML = '<img src="sun.png" width="250">'
} else{
    mensagem.innerHTML = 'Boa tarde!'
    imghora.innerHTML = '<img src="sun.png" width="250">'
    document.body.style.backgroundColor = '#ff8737'
    document.body.style.color = 'white'
    document.querySelector('.container').style.backgroundColor = '#ffae78'
}