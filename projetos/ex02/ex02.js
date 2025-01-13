function mostrar(){
    var nascimentoano = parseInt(document.getElementById('yearbirth').value)
    var genero = document.querySelector('input[name="Sexo"]:checked').value
    var msg = document.getElementById('detect')
    var imagem = document.getElementById('imgpeople')
    var date = new Date()
    var ano = date.getFullYear()

    if (document.getElementById('yearbirth').value > ano || document.getElementById('yearbirth').value < 1910){
        window.alert('[ERRO] Data de nascimento inválida!')
        } else {
        msg.innerHTML = `<p class="resultadoform">Foi detectado que você faz ${ano - nascimentoano} anos em ${ano} e é ${genero}!</p>`
        
        if (document.querySelector('input[name="Sexo"]:checked').value == 'Mulher'){
            imagem.innerHTML = '<img class="imagemsexo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Brown_-_replace_this_image_female.svg/200px-Brown_-_replace_this_image_female.svg.png?20180306042554" width="200">'
        }
        else if (document.querySelector('input[name="Sexo"]:checked').value == 'Homem'){
            imagem.innerHTML = '<img class="imagemsexo" src="https://www.fhja.com.br/wp-content/themes/fhja/images/conselheiro.png" width="200">'
        }
    }
}