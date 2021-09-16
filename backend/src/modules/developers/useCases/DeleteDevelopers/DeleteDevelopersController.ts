/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDevelopersUseCase } from './DeleteDevelopersUseCase';


class DeleteDevelopersController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const {id} = request.params

            const deleteDeveloper = container.resolve(DeleteDevelopersUseCase);
            
            await deleteDeveloper.execute(id);
            
            
            return response.status(204).send()   

        } catch (error) {
            return response.status(400)
            }

    }


}
export { DeleteDevelopersController };
