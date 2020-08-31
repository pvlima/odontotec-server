import { Router } from 'express';
import ListUsersController from '../../useCases/ListUsers/ListUsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const listUsers = new ListUsersController();

usersRoutes.use(ensureAuthenticated);

usersRoutes.get('/', listUsers.handle);

export default usersRoutes;
