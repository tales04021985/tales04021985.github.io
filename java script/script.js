
 // sorteador: Math.floor(Math.random()*10)+1


 //Codigos:
//nomes e uma variavel que armazenas os nomes
// nomes.pop,elimina um elemento do final da lista
// nomes.splice, elimina um item de uma posicao especifica
// nomes.length, niforma o tamanho da lista
// nomes[1], serve para saber a posuicao do elemento
// nomes[nomes.length-2],
//nomes.indexOf('tales'),
// nomes.unshift('tales'),
// nomes.shift()
// nomes.push('tales')
//nomes.reverse(), inverte a lista
//nomes.sort, faz a lista ficar em ordem alfabetica


a = 1
b = 2
c = a+b

//alert('Bem vindo ao meu site, '+nome)
//document.write('bem vindo ao site '+nome)
//alert('pong')

function teste (){
    nome = document.getElementById('nome').value
    //alert('olá '+nome)
    document.getElementById('mensagem').innerHTML = 'olá '+nome
    document.getElementById('nome').value = ''
}

function somar(){
    n1 = parseInt(document.getElementById('n1').value)
    n2 = parseInt(document.getElementById('n2').value)
    document.getElementById('resultado').innerHTML = 'A SOMA É '+n1 + n2
}

function avaliar(){
    nota = parseFloat(document.getElementById('nota').value)
    if(nota >= 6){
        document.getElementById('status').innerHTML = '<label class="apr">VOCÊ FOI APROVADO</label>'   
    }else if(nota >= 4){
        document.getElementById('status').innerHTML = '<label class="rec">VOCÊ ESTA DE RECUPERAÇÃO</label>'       
    }else{
         document.getElementById('status').innerHTML = '<label class="rep">VOCÊ FOI REPROVADO</label>'
    }

    

}

function mostrar(){
    palavra =  document.getElementById('palavra').value
    document.getElementById('palavra').value = ''
    
    if(palavra.toLowercase() == 'carro' ){
        document.getElementById('t').innerHTML += '<div id="especial">'+palavra+'</div>'
    }else{
        document.getElementById('t').innerHTML += '<div>'+palavra+'</div>'
    }

    
}
function sorteador(){
 // sorteador: Math.floor(Math.random()*10)+1
    min = parseInt(document.getElementById('min').value)
    max = parseInt(document.getElementById('max').value)
    ns = Math.floor(Math.random()*(max-min+1))+min
    document.getElementById('random').innerHTML = ns

    if( ns == max ){ 
        document.getElementById('random').innerHTML = ns+ ' Dano critico'
    }
    if( ns == min ){
        document.getElementById('random').innerHTML = ns+ ' Dano muito baixo'
    }





}

pessoas = []

function addpessoa(){
    pessoa = document.getElementById('pessoa').value
    document.getElementById('pessoa').value = ''
    pessoas.push(pessoa)
    mostrarpessoas()
    
    
}


function removerpessoa(){
    pessoa = document.getElementById('pessoa').value
    document.getElementById('pessoa').value = ''
    indice = pessoas.indexOf(pessoa)
    pessoas.splice(indice,1)
    mostrarpessoas()

}



function mostrarpessoas(){
    document.getElementById('lista').innerHTML = ''
    for(i=0; i<pessoas.length; i++){
        document.getElementById('lista').innerHTML += '<br>'+ pessoas[i]

    }
}








