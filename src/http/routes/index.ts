import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import clientsRoutes from './clients.routes';
import dentistsRoutes from './dentists.routes';
import schedulesRoutes from './schedules.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/dentists', dentistsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/clients', clientsRoutes);
routes.use('/schedules', schedulesRoutes);

export default routes;
