import { Router } from 'express';
import CreateScheduleController from '../../features/CreateSchedule/CreateScheduleController';
import DeleteScheduleController from '../../features/DeleteSchedule/DeleteScheduleController';
import ListSchedulesController from '../../features/ListSchedules/ListSchedulesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const schedulesRoutes = Router();
const createSchedule = new CreateScheduleController();
const listSchedule = new ListSchedulesController();
const deleteSchedule = new DeleteScheduleController();

schedulesRoutes.use(ensureAuthenticated);

schedulesRoutes.get('/', listSchedule.handle);
schedulesRoutes.post('/', createSchedule.handle);
schedulesRoutes.delete('/:id', deleteSchedule.handle);

export default schedulesRoutes;
