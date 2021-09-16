/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';

import { IDevelopersRepository } from '../../repositories/IDevelopersRepository';

interface IDataRequest {
    nome: string;
    sexo: string;
    idade: number;
    hobby: string;
    datanascimento: Date;
}

@injectable()
class CreateDeveloperUseCase {
    constructor(
        @inject('DevelopersRepository')
        private developersRepository: IDevelopersRepository,
    ) {}

    async execute(data: IDataRequest): Promise<void> {
        await this.developersRepository.create({ data });
    }
}

export { CreateDeveloperUseCase };
