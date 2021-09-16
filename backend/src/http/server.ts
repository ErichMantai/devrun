/* eslint-disable prettier/prettier */
import cors from 'cors';
import express from 'express';

import 'reflect-metadata';

import '../database';
import '../shared/container';

import { routes } from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('Server is Running!'));
