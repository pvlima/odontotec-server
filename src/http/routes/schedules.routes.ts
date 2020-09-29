import { Router } from 'express';
import CreateScheduleController from '../../features/CreateSchedule/CreateScheduleController';
import ListSchedulesController from '../../features/ListSchedules/ListSchedulesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const schedulesRoutes = Router();
const createSchedule = new CreateScheduleController();
const listSchedule = new ListSchedulesController();

schedulesRoutes.use(ensureAuthenticated);

schedulesRoutes.get('/', listSchedule.handle);
schedulesRoutes.post('/', createSchedule.handle);

export default schedulesRoutes;
