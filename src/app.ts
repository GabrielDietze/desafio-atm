import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/SaqueRoutes';

export const app = express();

// Middleware de body-parser
app.use(bodyParser.json());

// Middleware para capturar erros de JSON inválido
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError && 'status' in err && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'JSON inválido' });
    }
    next();
});
    
app.use('/api/saque', router);

