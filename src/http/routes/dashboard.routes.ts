import { Router } from 'express';
import DashboardInfoController from '../../features/DashboardInfo/DashboardInfoController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const dashboardRoutes = Router();
const dashboardInfo = new DashboardInfoController();

dashboardRoutes.use(ensureAuthenticated);

dashboardRoutes.get('/info', dashboardInfo.handle);

export default dashboardRoutes;
