function cadastrar() {
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    let genero = document.getElementById('genero').value; 

    let funcionario = {
        nome: nome.toLowerCase(),
        idade: idade,
        genero: genero
 
    }

    let funcionarios = 
    JSON.parse(localStorage.getItem("funcionarios"));

    funcionarios.push(funcionario);

    localStorage.setItem("funcionario",JSON.stringify(funcionarios));


    alert("Funcionario cadastrado com sucesso!");
}

function buscar() {
    let nomeBusca = document.getElementById("busca").value.toLowerCase();
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
    let resultado = document.getElementById("saida");
    let p = funcionarios.find(x => x.nome === nomeBusca);

    if (!p){
        document.getElementById(resultado).innerHTML = "<p>Funcionario não encontrado!</p>";
    }

    document.getElementById(resultado).innerHTML =
    "<tr>"+
     "<th>Nome</th>"+
     "<th>Idade</th>"+
     "<th>Gênero</th>"+
     "</tr>" +
        "<tr>" +
            "<td>" + p.nome + "</td>" +
            "<td>" + p.idade + "</td>" +
            "<td>" + p.genero + "</td>" +
        "</tr>";
}