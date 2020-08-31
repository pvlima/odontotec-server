import 'reflect-metadata';
import express from 'express';

import './database';
import './container';

import routes from './http/routes';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
