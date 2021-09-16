/* eslint-disable prettier/prettier */
import { FakeDevelopersRepository } from '../../repositories/fakes/FakeDevelopersRepository';
import { CreateDeveloperUseCase } from '../CreateDeveloper/CreateDeveloperUseCase';
import { ListAllDevelopersUseCase } from '../ListAllDevelopers/ListAllDevelopersUseCase';
import { DeleteDevelopersUseCase } from './DeleteDevelopersUseCase';

describe('deleteDevelopers', () => {
    it('should be able to delete Developers', async () => {
        const fakeDevelopersRepository = new FakeDevelopersRepository();
        const createDevelopersUseCase = new CreateDeveloperUseCase(
            fakeDevelopersRepository,
        );
        const listDevelopersUseCase = new ListAllDevelopersUseCase(
            fakeDevelopersRepository,
        );
        const deleteDevelopersUseCase = new DeleteDevelopersUseCase(
            fakeDevelopersRepository,
        );

        const data = {
            nome: 'Erich Mantai',
            sexo: 'M',
            idade: 25,
            hobby: 'Jogar Basquete',
            datanascimento: new Date(),
        };

        await createDevelopersUseCase.execute(data);

        const developer = await listDevelopersUseCase.execute();

        await deleteDevelopersUseCase.execute(developer[0].id);

        expect(developer.length).toBeLessThanOrEqual(0);
    });
});
