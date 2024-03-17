

function comprar() {

    // seleciona o tipo do ingresso
    let ingresso = document.getElementById('tipo-ingresso').value

    // pega o tipo do ingresso e utiliza como parâmetro para realizar operações
    subtrairIngresso(ingresso)


}

function subtrairIngresso(id) {

    let quantidade = parseInt(document.getElementById('qtd').value)
    let valorIngresso = parseInt(document.getElementById(`qtd-${id}`).textContent)

    // Erros
    if (quantidade > valorIngresso) { return alert(`Não é possivel pedir mais que ${valorIngresso} ingressos`) }
    if (quantidade <= 0) { return alert('Não é possivel fazer essa operação') }
    if (isNaN(quantidade)) { return alert('Tente novamente com um número válido') }
    if (quantidade > 10) { return alert('Só é permitido 10 ingressos por compra') }

    // subtrai uma quantidade do tipo de ingresso respectivo a cada clique em compra() que chama essa função
    valorIngresso = valorIngresso - quantidade

    // Erros
    if (valorIngresso < 0) { return alert('Ingressos esgotados ;(') }

    else {

        document.getElementById(`qtd-${id}`).textContent = valorIngresso
        alert('compra realizada com sucesso!')
    }
    // sobrepõe o valor do ingresso anterior



}







/*
if (ingresso == 'pista' ){

 pista = pista - quantidade

 document.getElementById('qtd-pista').textContent = `${pista}`

} */