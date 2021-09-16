/* eslint-disable prettier/prettier */
import { Developer } from '../../entities/Developer';
import {
    ICreateDeveloperDTO,
    IDevelopersRepository,
} from '../IDevelopersRepository';

class FakeDevelopersRepository implements IDevelopersRepository {
    private developers: Developer[] = [];

    async create({ data }: ICreateDeveloperDTO): Promise<void> {
        const { nome, idade, sexo, hobby, datanascimento } = data;

        const developer = new Developer();

        Object.assign(developer, {
            id: 'a1s5d4as4d65as4d4ad46a65',
            nome,
            idade,
            sexo,
            hobby,
            datanascimento,
        });
        this.developers.push(developer);
    }

    async listAll(): Promise<Developer[]> {
        return this.developers;
    }

    async paginatedList(start: number, limit: number): Promise<Developer[]> {
        return this.developers;
    }

    async findById(id: string): Promise<Developer> {
        const findDev = this.developers.find(developer => developer.id === id);
        return findDev;
    }

    async updateDeveloper(id: string, { data }: ICreateDeveloperDTO): Promise<Developer> {
        const { nome, idade, sexo, hobby, datanascimento } = data;

        const findDeveloper = this.developers.find(developer => developer.id === id);

        Object.assign(findDeveloper, { nome, idade, sexo, hobby, datanascimento });

        this.developers.push(findDeveloper);

        return findDeveloper;
    }

    async deleteDeveloper(id: string): Promise<void> {
        const findDeveloperIndex = this.developers.findIndex(developer => developer.id === id);

        this.developers.splice(findDeveloperIndex, 1);
    }
}

export { FakeDevelopersRepository };
