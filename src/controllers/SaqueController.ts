import { Request, Response } from 'express';
import {CalculaSaque} from '../Utils/CalculaSaque';

export const SaqueController = {
    async indexAll(req: Request, res: Response): Promise<void> {
        const { valor }: { valor: number } = req.body;
        try {
            const resultado = CalculaSaque(valor);
            res.status(200).json({ resultado });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao processar a solicitação' });
        }
    }
};
