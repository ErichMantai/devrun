/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllDevelopersUseCase } from './ListAllDevelopersUseCase';

class ListAllDevelopersController {
    async handle(request: Request, response: Response): Promise<Response> {

        const {init,limit} = request.query
        const listDeveloper = container.resolve(ListAllDevelopersUseCase);

        if(init||limit) {

            const developerPaginated = await listDeveloper.executeListPagination(Number(init),Number(limit));
        
            if(!developerPaginated) return response.status(404).json({error:"Developer not found!"})
        
            return response.json(developerPaginated); 
        } 

        const allDevelopers = await listDeveloper.execute();
    
        return response.json(allDevelopers);

    }
}

export { ListAllDevelopersController };
