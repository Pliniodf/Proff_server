import express, { Router } from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsCotroller from './controllers/ConnectionsCotroller';

const routes = express.Router();
const classesControllers = new ClassesControler
const connectionsControllers = new ConnectionsCotroller


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);


export default routes;