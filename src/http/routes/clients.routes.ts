import { Router } from 'express';
import CreateClientController from '../../features/CreateClient/CreateClientController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientsRoutes = Router();
const createClient = new CreateClientController();

clientsRoutes.use(ensureAuthenticated);

clientsRoutes.post('/', createClient.handle);

export default clientsRoutes;
