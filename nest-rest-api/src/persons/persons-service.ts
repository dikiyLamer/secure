import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Person } from "./schemas/person.schema";


@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>
    ){}
    
    async findAll(): Promise<Person[]> {
        return await this.personRepository.find();
      }
    
    async getOne(uid: string): Promise<Person> {
        return await this.personRepository.query(`select * from person where "uid"='${uid}'`)
    }

    async remove(uid: string): Promise<void> {
        await this.personRepository.query(`delete from person where "uid"='${uid}'`)
    }

    async create(person: Person): Promise<void>{
        await this.personRepository.save(person)
    }

    async update(person: Person): Promise<Person>{
        const uid = person.uid
        const entityToUpdate = await this.personRepository.findOneBy({uid})
        entityToUpdate.name = person.name
        entityToUpdate.surname = person.surname
        entityToUpdate.patronymic = person.patronymic
        entityToUpdate.age = person.age
        entityToUpdate.phoneNumber = person.phoneNumber
        entityToUpdate.company = person.company
        entityToUpdate.department = person.department
        entityToUpdate.position = person.position
        entityToUpdate.email = person.email
        entityToUpdate.description = person.description
        entityToUpdate.birthday = person.birthday
        return await this.personRepository.save(entityToUpdate)
    }

}