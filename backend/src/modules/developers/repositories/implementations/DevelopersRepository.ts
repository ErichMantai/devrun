/* eslint-disable prettier/prettier */
import { getRepository, Repository } from 'typeorm';

import { Developer } from '../../entities/Developer';
import {
    IDevelopersRepository,
    ICreateDeveloperDTO,
} from '../IDevelopersRepository';

class DevelopersRepository implements IDevelopersRepository {
    private repository: Repository<Developer>;

    constructor() {
        this.repository = getRepository(Developer);
    }
   async deleteDeveloper(id: string): Promise<void> {

        const developer = await this.repository.findOne({id});

        await this.repository.remove(developer);        
        
    }
    async updateDeveloper(id: string, { data }: ICreateDeveloperDTO): Promise<Developer> {

        const { nome, idade, sexo, hobby, datanascimento } = data

        const developerUpdate = await this.repository.findOne({ id })
    
        Object.assign(developerUpdate, {
          nome,
          idade,
          sexo,
          hobby,
          datanascimento
        })
    
        const updatedDeveloper = await this.repository.save(developerUpdate);
             
        return  updatedDeveloper
    }


    async paginatedList(init: number, limit: number): Promise<Developer[]> {

        const paginatedDevelopers = await this.repository.createQueryBuilder("developers").skip(init).take(limit).getMany() 

        return paginatedDevelopers
    }

    async findById(id: string): Promise<Developer> {
        const developer = await this.repository.findOne({id});

        return developer;
    }

    async listAll(): Promise<Developer[]> {
        const developers = await this.repository.find();

        return developers;
    }

    async create({ data }: ICreateDeveloperDTO): Promise<void> {
        const { nome, idade, sexo, hobby, datanascimento } = data;

        const createDev = this.repository.create({
            nome,
            idade,
            sexo,
            hobby,
            datanascimento,
        });

        await this.repository.save(createDev);
    }
}
export { DevelopersRepository };
