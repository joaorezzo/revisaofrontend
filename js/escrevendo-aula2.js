var button = document.querySelector("button");

button.onclick = function () {
    var nome = prompt ("Qual é o comando para adicionar um repositório remoto/ ");
    if ((nome = "git remote add")) {
        alert("0 " + nome + ". serve para iniciar um repositório remoto. Parabéns, você acertou!");
    }
    window.location = "aula3.html"
}