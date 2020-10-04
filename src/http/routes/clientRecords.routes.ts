import { Router } from 'express';
import CreateClientRecordController from '../../features/CreateClientRecord/CreateClientRecordController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientRecordsRoutes = Router();
const createClientRecord = new CreateClientRecordController();

clientRecordsRoutes.use(ensureAuthenticated);

clientRecordsRoutes.post('/', createClientRecord.handle);

export default clientRecordsRoutes;
