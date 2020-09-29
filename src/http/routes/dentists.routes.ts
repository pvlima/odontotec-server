import { Router } from 'express';
import ListDentistsController from '../../features/ListDentists/ListDentistsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const dentistsRoutes = Router();
const listDentists = new ListDentistsController();

dentistsRoutes.use(ensureAuthenticated);

dentistsRoutes.get('/', listDentists.handle);

export default dentistsRoutes;
