function mostrarAlerta(){
alert("Bom Dia Turma do 1ADM")
}

function pedirNome(){
    let nome = prompt("informe o seu nome:")
    alert(bom dia + nome)
}
function somarNumeros(){
    let primeiroValor = Number(prompt("informe o primeiro numero:"))
    let segundoValor = (prompt("informe o segundo numero"))
    let soma = primeiroValor + segundoValor
    alert("a soma dos numeros é:" + soma)
}
function mudar Formatação(){
    let resultado = document.getElementById("resultado")
    let nome = prompt("informe o seu nome")
    resultado.textContent = "bom dia" + nome
    resultado.style.background = "pink"
}