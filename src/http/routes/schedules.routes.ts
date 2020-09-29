import { Router } from 'express';
import CreateScheduleController from '../../features/CreateSchedule/CreateScheduleController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const schedulesRoutes = Router();
const createSchedule = new CreateScheduleController();

schedulesRoutes.use(ensureAuthenticated);

schedulesRoutes.post('/', createSchedule.handle);

export default schedulesRoutes;
