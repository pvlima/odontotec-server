import { Router } from 'express';
import CreateClientController from '../../features/CreateClient/CreateClientController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ListClientsController from '../../features/ListClients/ListClientsController';

const clientsRoutes = Router();
const listClients = new ListClientsController();
const createClient = new CreateClientController();

clientsRoutes.use(ensureAuthenticated);

clientsRoutes.get('/', listClients.handle);
clientsRoutes.post('/', createClient.handle);

export default clientsRoutes;
