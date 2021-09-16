/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';

import { Developer } from '../../entities/Developer';
import { ICreateDeveloperDTO, IDevelopersRepository } from '../../repositories/IDevelopersRepository';


@injectable()
class DeleteDevelopersUseCase {
    constructor(
        @inject('DevelopersRepository')
        private developersRepository: IDevelopersRepository,
    ) {}

    async execute(id:string): Promise<void> {

        await this.developersRepository.deleteDeveloper(id);
     
    }
}

export { DeleteDevelopersUseCase };
