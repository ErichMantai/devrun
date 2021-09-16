/* eslint-disable prettier/prettier */
import { FakeDevelopersRepository } from '../../repositories/fakes/FakeDevelopersRepository';
import { CreateDeveloperUseCase } from '../CreateDeveloper/CreateDeveloperUseCase';
import { ListAllDevelopersUseCase } from '../ListAllDevelopers/ListAllDevelopersUseCase';
import { UpdateDevelopersUseCase } from './UpdateDevelopersUseCase';

describe('ListDevelopers', () => {
    it('should be able to list Developers', async () => {
        const fakeDeveloperRepository = new FakeDevelopersRepository();
        const createDevelopersUseCase = new CreateDeveloperUseCase(fakeDeveloperRepository);
        const listDevelopersUseCase = new ListAllDevelopersUseCase(fakeDeveloperRepository);
        const updateDeveloperUseCase = new UpdateDevelopersUseCase(
            fakeDeveloperRepository,
        );

        const data1 = {
            nome: 'Isabela Freira',
            sexo: 'F',
            idade: 30,
            hobby: 'Jogar futebol',
            datanascimento: new Date(),
        };

        await createDevelopersUseCase.execute(data1);

        const developer = await listDevelopersUseCase.execute();

        const data = developer[0];

        Object.assign(data, {
            nome: 'Amanda Castilho',
            sexo: 'F',
            idade: 30,
            hobby: 'Jogar vôlei',
            datanascimento: new Date(),
        });

        const developerUpdated = await updateDeveloperUseCase.execute('a1s5d4as4d65as4d4ad46a65', { data });

        expect(developerUpdated.nome).toBe('Amanda Castilho');
    });
});
