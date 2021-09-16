/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDevelopersUseCase } from './UpdateDevelopersUseCase';


class UpdateDevelopersController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const {id} = request.params

            const data = request.body

            const updateDeveloper = container.resolve(UpdateDevelopersUseCase);
            
            const developer = await updateDeveloper.execute(id,{data});
            
            
            return response.json(developer);   

        } catch (error) {
            return response.status(404)
            }

    }


}
export { UpdateDevelopersController };
