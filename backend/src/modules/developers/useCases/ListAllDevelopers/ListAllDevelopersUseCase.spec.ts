/* eslint-disable prettier/prettier */
import { FakeDevelopersRepository } from '../../repositories/fakes/FakeDevelopersRepository';
import { CreateDeveloperUseCase } from '../CreateDeveloper/CreateDeveloperUseCase';
import {ListAllDevelopersUseCase} from "./ListAllDevelopersUseCase";

describe("ListDevelopers", () => {
    it("should be able to list Devs", async () => {
      const fakeDevelopersRepository = new FakeDevelopersRepository()
      const createDeveloperUseCase = new CreateDeveloperUseCase(fakeDevelopersRepository)
      const listDeveloperUseCase = new ListAllDevelopersUseCase(fakeDevelopersRepository)
  
      const data = {
        nome: "Erich Mantai",
        sexo: "M",
        idade: 25,
        hobby: "jogar basquete",
        datanascimento: new Date
      }
  
      await createDeveloperUseCase.execute(data)
      await createDeveloperUseCase.execute(data)
  
      const developers = await listDeveloperUseCase.execute()
  
      expect(developers.length).toBeGreaterThan(1)
    })
  })