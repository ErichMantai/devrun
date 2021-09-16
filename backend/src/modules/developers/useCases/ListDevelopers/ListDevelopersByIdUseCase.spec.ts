/* eslint-disable prettier/prettier */
import { FakeDevelopersRepository } from '../../repositories/fakes/FakeDevelopersRepository';
import { CreateDeveloperUseCase } from '../CreateDeveloper/CreateDeveloperUseCase';
import { ListDevelopersByIdUseCase } from './ListDevelopersByIdUseCase';

describe('GetSpecificDeveloper', () => {
    it('should be able to get a specific Developer', async () => {
        const fakeDevelopersRepository = new FakeDevelopersRepository();
        const createDevelopersUseCase = new CreateDeveloperUseCase(
            fakeDevelopersRepository,
        );
        const getDeveopersByIdUseCase = new ListDevelopersByIdUseCase(
            fakeDevelopersRepository,
        );

        const data = {
            nome: 'Erich Mantai',
            sexo: 'M',
            idade: 25,
            hobby: 'Jogar Basquete',
            datanascimento: new Date(),
        };
        const data1 = {
            nome: 'Isabela Freira',
            sexo: 'F',
            idade: 30,
            hobby: 'Jogar futebol',
            datanascimento: new Date(),
        };

        await createDevelopersUseCase.execute(data);
        await createDevelopersUseCase.execute(data1);

        const dev = await getDeveopersByIdUseCase.execute('a1s5d4as4d65as4d4ad46a65');

        expect(dev.id).toBe('a1s5d4as4d65as4d4ad46a65');
    });
});
