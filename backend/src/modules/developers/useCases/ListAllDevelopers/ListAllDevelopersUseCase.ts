/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';

import { Developer } from '../../entities/Developer';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';


@injectable()
class ListAllDevelopersUseCase {
    constructor(
        @inject('DevelopersRepository')
        private developersRepository: IDevelopersRepository,
    ) {}

    async execute(): Promise<Developer[]> {
        const allDevelopers = await this.developersRepository.listAll();

        return allDevelopers
    }

    async executeListPagination(init:number, limit:number):Promise<Developer[]> {
        
        const developer = await this.developersRepository.paginatedList(init,limit);

        return developer
    }
}

export { ListAllDevelopersUseCase };
