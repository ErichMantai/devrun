/* eslint-disable prettier/prettier */
import { Router } from 'express';

import { CreateDeveloperController } from '../../modules/developers/useCases/CreateDeveloper/CreateDeveloperController';
import { DeleteDevelopersController } from '../../modules/developers/useCases/DeleteDevelopers/DeleteDevelopersController';
import { ListAllDevelopersController } from '../../modules/developers/useCases/ListAllDevelopers/ListAllDevelopersController';
import {ListDevelopersByIdController} from '../../modules/developers/useCases/ListDevelopers/ListDevelopersByIdController';
import {UpdateDevelopersController} from '../../modules/developers/useCases/UpdateDevelopers/UpdateDevelopersController';

const devsRoutes = Router();

const createDeveloperController = new CreateDeveloperController();
const listAllDevelopersController = new ListAllDevelopersController();
const listDevelopersByIdController = new ListDevelopersByIdController();
const updateDevelopersController = new UpdateDevelopersController();
const deleteDevelopersController = new DeleteDevelopersController();

devsRoutes.post('/', createDeveloperController.handle);

devsRoutes.get('/', listAllDevelopersController.handle);

devsRoutes.get('/:id', listDevelopersByIdController.handle);

devsRoutes.put('/:id', updateDevelopersController.handle);

devsRoutes.delete('/:id', deleteDevelopersController.handle);


export { devsRoutes };
