function enviarficha(){  
    nome = document.getElementById('nome').value.trim()
    foto = document.getElementById('foto').value.trim()
    forc = parseInt(document.getElementById('for').value)
    des = parseInt(document.getElementById('des').value)
    con = parseInt(document.getElementById('con').value)
    int = parseInt(document.getElementById('int').value)
    car = parseInt(document.getElementById('car').value)
    arma = document.getElementById('arma').value

    nivel = 1
    vida = 10+nivel+con
    armadura = 10+nivel+(des*5)


    fichaValida = true

    if( nome.length < 5 || nome.length > 15){
        fichaValida = false
        alert('O nome e inválido. (minimo de 5 e maximo de 15 caracteres')
    }

    if( isNaN(forc) || isNaN(des) || isNaN(con) || isNaN(int) || isNaN(car)){
        fichaValida = false
        alert('preencha todos os atributos')
    }

    somaAtributos = forc +des + con + int + car

    if( somaAtributos > 8 ){
        fichaValida = false
        alert('voçê usou '+somaAtributos+' pontos e ultrapassou o limite')
    }

    if( arma == 'Desarmado'){
        fichaValida = false
        alert('escolha uma arma')
    }

     if( foto == ''){

        foto =  'https://th.bing.com/th/id/OIP.QgMMHETicyNFtis2y-asnwHaKV?w=123&h=180&c=7&r=0&o=5&pid=1.7'
        
        

        
        

    }

    if( fichaValida == true ){
        document.getElementById('ficha').style.display = 'none' 
        document.getElementById('fichapronta').style.display = 'block'
        document.getElementById('nome2').innerHTML = nome
        document.getElementById('foto2').src = foto
        document.getElementById('arma2').innerHTML = 'Arma: '+arma
        document.getElementById('status').innerHTML = 'Nivel: '+nivel+' | Vida: '+vida+'| Armadura: '+armadura+''
        document.getElementById('atri').innerHTML = 'força: '+forc+' |destreza: '+des+' |constituição: '+con+' |inteligencia: '+int+' |carisma: '+car+' |'
}

}


function dado(lados){

    valor = Math.floor(Math.random()*lados)+1
    alert('Resultado do dado: '+valor)

   }


function ataque(bonus){
    valor = Math.floor(Math.random()*20)+1
    if(valor == 1){
        alert('Erro critico 💀')

    }
    else if(valor == 20){
        alert('Acerto critico 🔥')
    }
    else{
        alert('O acerto do ataque deu '+(valor+bonus))
    }
     

}