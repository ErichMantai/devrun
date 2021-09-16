/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';

import { Developer } from '../../entities/Developer';
import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';


@injectable()
class ListDevelopersByIdUseCase {
    constructor(
        @inject('DevelopersRepository')
        private developersRepository: IDevelopersRepository,
    ) {}

    async execute(id:string): Promise<Developer> {

        const developer = await this.developersRepository.findById(id);

        return developer
    }
}

export { ListDevelopersByIdUseCase };
