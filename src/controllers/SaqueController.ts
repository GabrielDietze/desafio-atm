import { Request, Response } from 'express';
import { CalculaSaque } from '../Utils/CalculaSaque';

export const SaqueController = {
     async indexAll(req: Request, res: Response): Promise<void> {
          // Extrai o valor do corpo da requisição  
          const { valor }: { valor: number } = req.body;

             // Verifica se a chave "valor" está presente no corpo da requisição
          if (valor === undefined) {
            res.status(400).json({ error: 'A chave "valor" deve estar presente no corpo da requisição' });
          }
          // Valida se o valor é um número
          else if (typeof valor !== 'number') {
               res.status(400).json({ error: 'O valor deve ser um número' });
          }
          // Valida se o valor é um número inteiro
          else if (!Number.isInteger(valor)) {
               res.status(400).json({ error: 'Você não pode sacar um valor que contenha centavos, por favor insira um valor inteiro' });
          }
          // Valida se o valor é maior que zero 
          else if (valor <= 0) {
               res.status(400).json({ error: 'Você não pode sacar um valor negativo ou igual a zero' });
          }
          // Valida se o valor é 1 ou 3 (moedas não disponíveis)
          else if (valor === 1 || valor === 3) {
               res.status(400).json({ error: 'Moeda de 1 real não disponível, por favor selecione outro valor para saque' });
          }
          //nosso banco não tem tanto dinheiro assim XD, chame o Gabriel para resolver!
          else if (valor > 50000) {
               res.status(400).json({ error: 'Por favor consulte o gerente Gabriel Dietze do banco Morada, o valor máximo para saque é de 50000 reais' });
          } else {

               try {
                    //chama a função CalculaSaque e armazena o resultado   
                    const resultado = CalculaSaque(valor);
                    //retorna o resultado
                    res.status(200).json({ resultado });
               } catch (error) {
                    //caso ocorra algum erro, retorna o erro
                    console.error(error);
                    res.status(500).json({ error: 'Erro ao processar a solicitação' });
               }
          }
     }
};