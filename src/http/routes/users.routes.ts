import { Router } from 'express';
import ListUsersController from '../../useCases/ListUsers/ListUsersController';

const listUsers = new ListUsersController();

const usersRoutes = Router();

usersRoutes.get('/', listUsers.handle);

export default usersRoutes;
