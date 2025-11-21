function cadastrar() {
    let nome = document.getElementById('nome').value.toLowerCase();
    let idade = parseInt(document.getElementById('idade').value);
    let genero = document.getElementById('genero').value;

    let funcionario = {
        nome: nome,
        idade: idade,
        genero: genero,
    };


    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

    funcionarios.push(funcionario);


    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    alert("Funcionário cadastrado com sucesso!");
}
    

function buscar() {
    let nomeBusca = document.getElementById('buscar').value.toLowerCase();
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    let saida = document.getElementById("saida");

    let p = funcionarios.find(x => x.nome === nomeBusca);

    if (!p) {
        saida.innerHTML = "<p>Funcionário não encontrado!</p>";
        return;
    }

    saida.innerHTML =
        "<table border='1'>" +
            "<tr>" +
                "<th>Nome</th>" +
                "<th>Idade</th>" +
                "<th>Gênero</th>" +
            "</tr>" +
            "<tr>" +
                "<td>" + p.nome + "</td>" +
                "<td>" + p.idade + "</td>" +
                "<td>" + p.genero + "</td>" +
                

            "</tr>" +
        "</table>";
}