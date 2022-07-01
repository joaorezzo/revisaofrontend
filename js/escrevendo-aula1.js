var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt ("Qual é o comando para iniciar o git");
    if ((nome = "git init")) {
        alert("0 " + nome + ". serve para iniciar o git. Parabéns, você acertou!");
    }
    window.location = "aula2.html"
}