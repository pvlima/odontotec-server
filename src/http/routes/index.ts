import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import clientsRoutes from './clients.routes';
import dentistsRoutes from './dentists.routes';
import schedulesRoutes from './schedules.routes';
import dashboardRoutes from './dashboard.routes';
import clientRecordsRoutes from './clientRecords.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/dentists', dentistsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/clients', clientsRoutes);
routes.use('/schedules', schedulesRoutes);
routes.use('/dashboard', dashboardRoutes);
routes.use('/client-records', clientRecordsRoutes);

export default routes;
