/* eslint-disable prettier/prettier */
import { Developer } from '../entities/Developer';

interface IDeveloperDTO {
    nome: string;
    sexo: string;
    idade: number;
    hobby: string;
    datanascimento: Date;
}

interface ICreateDeveloperDTO {
    data: IDeveloperDTO;
}

interface IDevelopersRepository {
    create({ data }: ICreateDeveloperDTO): Promise<void>;
    listAll(): Promise<Developer[]>;
    findById(id: string): Promise<Developer>;
    paginatedList(init: number, limit: number): Promise<Developer[]>;
    updateDeveloper(id: string, { data }: ICreateDeveloperDTO): Promise<Developer>;
    deleteDeveloper(id: string): Promise<void>;
}

export { IDevelopersRepository, ICreateDeveloperDTO };
