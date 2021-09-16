/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDeveloperUseCase } from './CreateDeveloperUseCase';

class CreateDeveloperController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = request.body;

            const createDeveloperUseCase = container.resolve(
                CreateDeveloperUseCase,
            );

            await createDeveloperUseCase.execute(data);

            return response.status(201).send();
        } catch (error) {
            return response.status(400).send();
        }
    }
}
export { CreateDeveloperController };
