function jogar(escolhaJogador) {

    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(escolhaJogador);
    console.log(escolhaComputador);

    if (escolhaJogador === escolhaComputador) {
        var resultado = "empatou"
        
    } else if (escolhaJogador == "Pedra" && escolhaComputador == "Tesoura") {
        var resultado = "venceu"
             
    } else if (escolhaJogador == "Papel" && escolhaComputador == "Tesoura") {
        var resultado = "venceu"
        
    }  else if (escolhaJogador == "Tesoura" && escolhaComputador == "Papel") {
        var resultado = "venceu"
        
    } else {
        var resultado = "venceu"
        
    }

    console.log(resultado)
    

    let InsertEscolha = document.getElementById("escolha");
    InsertEscolha.textContent =  escolhaJogador + " x " + escolhaComputador;

    let InsertResult = document.getElementById("resultado");
    InsertResult.textContent =  "Você " + resultado;
}