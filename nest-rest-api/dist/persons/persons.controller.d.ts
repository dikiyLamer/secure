import { CreatePersonDTO } from './DTO/create-person.dto';
import { PersonService } from './persons-service';
import { UpdatePersonDTO } from './DTO/update-person.dto';
import { Person } from './schemas/person.schema';
export declare class PersonsController {
    private readonly personService;
    constructor(personService: PersonService);
    getAll(): Promise<Person[]>;
    getOne(id: string): Promise<Person>;
    create(createPersonDTO: CreatePersonDTO): Promise<void>;
    remove(uid: string): Promise<void>;
    update(updatePersonDTO: UpdatePersonDTO, id: string): Promise<Person>;
}
