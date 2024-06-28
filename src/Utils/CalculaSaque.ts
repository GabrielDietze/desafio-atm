// Definindo uma interface para representar as notas disponíveis e suas quantidades
interface NotasDisponiveis {
    [valor: number]: number;   // Chave é o valor da nota, valor é a quantidade de notas
}

export function CalculaSaque(valor: number): NotasDisponiveis | string {

    const notas = [100, 50, 20, 10, 5, 2];

    // Inicializando as variaveis de notas disponíveis com o valor 0 para cada nota
    const notasDisponiveis: NotasDisponiveis = notas.reduce((acc, nota) => {
        acc[nota] = 0;
        return acc;
    }, {} as NotasDisponiveis);


    // Ordena as notas de forma decrescente para garantir que usemos as maiores notas primeiro
    notas.sort((a, b) => b - a);

    // Variável para controlar o valor que ainda precisa ser sacado
    let valorRestante = valor;

    // Itera sobre cada nota disponível para calcular a quantidade mínima de notas necessárias
    for (const nota of notas) {
        // Verifica se o valor restante é maior ou igual à nota atua
        if (valorRestante >= nota) {

            const qtdNotas = Math.floor(valorRestante / nota); // Calcula quantas notas da denominação atual podem ser usadas
            notasDisponiveis[nota] = qtdNotas;  // Armazena a quantidade de notas usadas
            valorRestante -= qtdNotas * nota;  // Subtrai o valor correspondente das notas utilizadas
        }
        //caso não exista mais valores para serem sacados, o loop é interrompido
        if (valorRestante === 0) {
            break;
        }
    }

    // Se ainda restar algum valor, significa que não foi possível sacar o valor solicitado
    if (valorRestante !== 0) {
        return "Impossível sacar o valor solicitado com as notas disponíveis, por favor digite outro valor de saque.";
    }

    // Retorna o objeto com a quantidade mínima de notas utilizadas
    return notasDisponiveis;
}