import { Router } from 'express';
import AuthController from '../../features/Auth/AuthController';

const authController = new AuthController();

const sessionsRoutes = Router();

sessionsRoutes.post('/', authController.handle);

export default sessionsRoutes;
