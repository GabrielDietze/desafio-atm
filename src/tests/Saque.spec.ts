import { CalculaSaque } from '../Utils/CalculaSaque';

describe('CalculaSaque', () => {
  it('Deve calcular corretamente o saque para um valor válido', () => {
    const resultado = CalculaSaque(380);
    expect(resultado).toEqual({
      100: 3,
      50: 1,
      20: 1,
      10: 1,
      5: 0,
      2: 0
    });
  });

  it('Deve retornar mensagem de erro para valores não disponíveis', () => {
    const resultado = CalculaSaque(1);
    expect(resultado).toBe('Impossível sacar o valor solicitado com as notas disponíveis, por favor digite outro valor de saque.');
  });

  it('Deve retornar mensagem de erro para valor em formato de string', () => {
    const resultado = CalculaSaque('380' as any); // Simulando valor como string
    expect(resultado).toBe('O valor deve ser um número');
  });

  it('Deve retornar mensagem de erro para valor igual a 3', () => {
    const resultado = CalculaSaque(3);
    expect(resultado).toBe('Moeda de 1 real não disponível, por favor selecione outro valor para saque');
  });

  it('Deve retornar mensagem de erro para valor igual a 1', () => {
    const resultado = CalculaSaque(1);
    expect(resultado).toBe('Moeda de 1 real não disponível, por favor selecione outro valor para saque');
  });

  it('Deve retornar mensagem de erro para valor negativo', () => {
    const resultado = CalculaSaque(-100);
    expect(resultado).toBe('Você não pode sacar um valor negativo ou igual a zero');
  });

  it('Deve retornar mensagem de erro para valor decimal', () => {
    const resultado = CalculaSaque(380.5);
    expect(resultado).toBe('Você não pode sacar um valor que contenha centavos, por favor insira um valor inteiro');
  });

  it('Deve retornar mensagem de erro para valor acima de 50000', () => {
    const resultado = CalculaSaque(60000);
    expect(resultado).toBe('Por favor consulte o gerente Gabriel Dietze do banco Morada, o valor máximo para saque é de 50000 reais');
  });

  it('Deve retornar mensagem de erro para JSON inválido (sem valor)', () => {
    const resultado = CalculaSaque(undefined as any); // Simulando JSON inválido
    expect(resultado).toBe('A chave "valor" deve estar presente no corpo da requisição');
  });
});
