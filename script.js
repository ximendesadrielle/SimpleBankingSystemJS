let saldo = 1000;
let transacoes = [];

function adicionarTransacao(tipo, valor) {
    let dataAtual = new Date().toLocaleString();
    transacoes.push({
        tipo: tipo,
        valor: valor,
        data: dataAtual
    });
}

while (true) {
    let escolha = prompt("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção: \n1. Depositar \n2. Sacar \n3. Ver Saldo \n4. Ver Histórico de Transações \n5. Sair");

    switch (escolha) {
        case "1":
            let deposito = parseFloat(prompt("Digite o valor a ser depositado:"));
            if (isNaN(deposito) || deposito <= 0) {
                alert("Valor inválido. Tente novamente.");
            } else {
                saldo += deposito;
                adicionarTransacao('Depósito', deposito);
                alert(`Depósito de R$${deposito} realizado! Saldo atual: R$${saldo}`);
            }
            break;
        
        case "2":
            let saque = parseFloat(prompt("Digite o valor a ser sacado:"));
            if (isNaN(saque) || saque <= 0) {
                alert("Valor inválido. Tente novamente.");
            } else if (saque > saldo) {
                alert("Saldo insuficiente.");
            } else {
                saldo -= saque;
                adicionarTransacao('Saque', saque);
                alert(`Saque de R$${saque} realizado! Saldo atual: R$${saldo}`);
            }
            break;

        case "3":
            alert(`Seu saldo atual é: R$${saldo}`);
            break;

        case "4":
            let historico = "";
            for (let transacao of transacoes) {
                historico += `${transacao.tipo} de R$${transacao.valor} em ${transacao.data}\n`;
            }
            alert(historico || "Nenhuma transação registrada.");
            break;

        case "5":
            alert("Obrigado por usar nosso sistema!");
            exit();
            break;

        default:
            alert("Opção inválida. Tente novamente.");
    }
}

function exit() {
    throw new Error("Encerrando o programa.");
}
