import { Repository } from "typeorm";
import { Person } from "./schemas/person.schema";
export declare class PersonService {
    private personRepository;
    constructor(personRepository: Repository<Person>);
    findAll(): Promise<Person[]>;
    getOne(uid: string): Promise<Person>;
    remove(uid: string): Promise<void>;
    create(person: Person): Promise<void>;
    update(person: Person): Promise<Person>;
}
