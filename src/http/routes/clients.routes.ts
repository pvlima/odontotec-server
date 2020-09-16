import { Router } from 'express';
import CreateClientController from '../../features/CreateClient/CreateClientController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ListClientsController from '../../features/ListClients/ListClientsController';
import ShowClientController from '../../features/ShowClient/ShowClientController';
import UpdateClientController from '../../features/UpdateClient/UpdateClientController';
import DeleteClientController from '../../features/DeleteClient/DeleteClientController';

const clientsRoutes = Router();
const listClients = new ListClientsController();
const createClient = new CreateClientController();
const showClient = new ShowClientController();
const updateClient = new UpdateClientController();
const deleteClient = new DeleteClientController();

clientsRoutes.use(ensureAuthenticated);

clientsRoutes.get('/', listClients.handle);
clientsRoutes.get('/:id', showClient.handle);
clientsRoutes.post('/', createClient.handle);
clientsRoutes.put('/:id', updateClient.handle);
clientsRoutes.delete('/:id', deleteClient.handle);

export default clientsRoutes;
