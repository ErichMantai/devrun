/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';

import { Developer } from '../../entities/Developer';
import { ICreateDeveloperDTO, IDevelopersRepository } from '../../repositories/IDevelopersRepository';


@injectable()
class UpdateDevelopersUseCase {
    constructor(
        @inject('DevelopersRepository')
        private developersRepository: IDevelopersRepository,
    ) {}

    async execute(id:string, {data}: ICreateDeveloperDTO): Promise<Developer> {

        const developer = await this.developersRepository.updateDeveloper(id,{data});

        return developer
    }
}

export { UpdateDevelopersUseCase };
