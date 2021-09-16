/* eslint-disable prettier/prettier */
import { FakeDevelopersRepository } from '../../repositories/fakes/FakeDevelopersRepository';
import { ListAllDevelopersUseCase } from '../ListAllDevelopers/ListAllDevelopersUseCase';
import { CreateDeveloperUseCase } from './CreateDeveloperUseCase';

describe('CreateDeveloper', () => {
    it('should be able to create a new Developer', async () => {
        const fakeDevsRepository = new FakeDevelopersRepository();
        const createDeveloperUseCase = new CreateDeveloperUseCase(
            fakeDevsRepository,
        );
        const listDevUseCase = new ListAllDevelopersUseCase(fakeDevsRepository);

        const data = {
            nome: 'Erich Mantai',
            sexo: 'M',
            idade: 25,
            hobby: 'Jogar Tênis',
            datanascimento: new Date(),
        };

        await createDeveloperUseCase.execute(data);

        const developer = await listDevUseCase.execute();

        expect(developer[0].nome).toBe('Erich Mantai');
    });
});
