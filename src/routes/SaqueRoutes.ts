import { Router } from "express";
import { SaqueController } from '../controllers/SaqueController';


export const router = Router();

router.post('/', SaqueController.indexAll);