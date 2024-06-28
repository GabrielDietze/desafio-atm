interface NotasDisponiveis {
    [valor: number]: number;
}

export function CalculaSaque(valor : number): NotasDisponiveis | string{

    const notas = [100, 50, 20, 10, 5, 2];
    const notasDisponiveis: NotasDisponiveis = {};

    for (const nota of notas) {
        notasDisponiveis[nota] = 0;
    }
    
    // Inicializa a tabela dp para guardar o número mínimo de notas para cada valor de saque
    const dp: number[] = new Array(valor + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    return 'vasco';
}