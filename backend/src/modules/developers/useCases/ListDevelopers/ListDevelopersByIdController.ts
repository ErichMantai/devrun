/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListDevelopersByIdUseCase } from './ListDevelopersByIdUseCase';


class ListDevelopersByIdController {
    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const {id} = request.params

            const listDeveloper = container.resolve(ListDevelopersByIdUseCase);
            
            const developer = await listDeveloper.execute(id);
            
            if(!developer) return response.status(404).json({error:"Developer not found!"})
            
            return response.json(developer);   
        } catch (error) {
            return response.status(404).json({error:"Developer not found!"}) 
            }

    }


}
export { ListDevelopersByIdController };
