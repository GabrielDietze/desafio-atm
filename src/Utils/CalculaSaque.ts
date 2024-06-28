interface NotasDisponiveis {
    [valor: number]: number;
}

export function CalculaSaque(valor : number): NotasDisponiveis | string{
    //tratamento de erro caso o valor não seja um número inteiro
    if (!Number.isInteger(valor)) {
        return 'Você não pode sacar um valor que contenha centavos, por favor insira um valor inteiro';
    }

    //tratamento de erro caso o valor seja menor ou igual a 0 e caso o valor seja 1 ou 3 
    //E definição do valor maximo de saque como 50000, nosso caixa não tem tanto dinheiro assim XD
    if (valor <= 0) {
      return 'Você não pode sacar um valor negativo ou igual a zero';	
    } else if (valor == 1 || valor == 3){
      return 'Moeda de 1 real não disponível, por favor selecione outro valor para saque';
    } else if(valor > 50000){
        return 'Por favor consulte o gerente Gabriel Dietze do banco Morada, o valor máximo para saque é de 50000 reais';
    }

    const notas = [100, 50, 20, 10, 5, 2];
    const notasDisponiveis: NotasDisponiveis = {};

    for (const nota of notas) {
        notasDisponiveis[nota] = 0;
    }

    // Inicializa a tabela dp para guardar o número mínimo de notas para cada valor de saque
    const dp: number[] = new Array(valor + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    return 'teste';
}