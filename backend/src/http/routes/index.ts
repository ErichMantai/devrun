import { Router } from 'express';

import { devsRoutes } from './developers.routes';

const routes = Router();

routes.use('/developers', devsRoutes);

export { routes };
