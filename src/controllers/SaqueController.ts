import { Request, Response } from 'express';
import { CalculaSaque } from '../Utils/CalculaSaque';

export const SaqueController = {
    async indexAll(req: Request, res: Response): Promise<void> {
        const { valor }: { valor: number } = req.body;

        // Verificação se a chave 'valor' está presente 
        if (valor === undefined) {
         res.status(400).json({ error: 'A chave "valor" deve estar presente no corpo da requisição' });
        } 
        // Validação do valor
        else if (typeof valor !== 'number') {
             res.status(400).json({ error: 'O valor deve ser um número' });
        } else if (!Number.isInteger(valor)) {
             res.status(400).json({ error: 'Você não pode sacar um valor que contenha centavos, por favor insira um valor inteiro' });
        } else if (valor <= 0) {
             res.status(400).json({ error: 'Você não pode sacar um valor negativo ou igual a zero' });
        } else if (valor === 1 || valor === 3) {
             res.status(400).json({ error: 'Moeda de 1 real não disponível, por favor selecione outro valor para saque' });
        } 
        //nosso banco não tem tanto dinheiro assim XD, chame o Gabriel para resolver!
        else if (valor > 50000) {
             res.status(400).json({ error: 'Por favor consulte o gerente Gabriel Dietze do banco Morada, o valor máximo para saque é de 50000 reais' });
        } else {

        try {
            const resultado = CalculaSaque(valor);
            res.status(200).json({ resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao processar a solicitação' });
        }
    }}
};