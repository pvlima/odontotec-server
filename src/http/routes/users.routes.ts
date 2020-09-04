import { Router } from 'express';
import ListUsersController from '../../features/ListUsers/ListUsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const listUsers = new ListUsersController();

usersRoutes.use(ensureAuthenticated);

usersRoutes.get('/', listUsers.handle);

export default usersRoutes;
