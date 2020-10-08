import { Router } from 'express';
import CreateClientRecordController from '../../features/CreateClientRecord/CreateClientRecordController';
import ListClientRecordsController from '../../features/ListClientRecords/ListClientRecordsController';
import DeleteClientRecordsController from '../../features/DeleteClientRecords/DeleteClientRecordsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientRecordsRoutes = Router();
const createClientRecord = new CreateClientRecordController();
const listClientRecords = new ListClientRecordsController();
const deleteClientRecords = new DeleteClientRecordsController();

clientRecordsRoutes.use(ensureAuthenticated);

clientRecordsRoutes.get('/', listClientRecords.handle);
clientRecordsRoutes.post('/', createClientRecord.handle);
clientRecordsRoutes.delete('/:client_id', deleteClientRecords.handle);

export default clientRecordsRoutes;
