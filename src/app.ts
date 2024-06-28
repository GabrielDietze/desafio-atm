import express from 'express';

import { router } from './routes/SaqueRoutes';

export const app = express();

app.use(express.json());
app.use('/api/saque', router);