import { Controller, Get, Param, Post, Delete, Body, Put, Redirect, UseGuards } from '@nestjs/common';
import { CreatePersonDTO } from './DTO/create-person.dto';
import { PersonService } from './persons-service';
import { UpdatePersonDTO } from './DTO/update-person.dto';
import { Person } from './schemas/person.schema';
import { v4 as uuidv4 } from 'uuid'
import { AuthGuard, Public, Resource, RoleGuard, Roles, Scopes, Unprotected } from 'nest-keycloak-connect';


@Controller('api/persons')
@UseGuards(AuthGuard)
export class PersonsController {
    constructor(private readonly personService: PersonService
                ){
        
    }


    @Get()
    //@Redirect('http://localhost:8080')
    //@Public(false)
    @Roles({roles: ['user']})
    @UseGuards(RoleGuard)
    getAll(): Promise<Person[]>{
        return this.personService.findAll()
    }

    @Get  (':id')
    getOne(@Param('id') id: string): Promise<Person>{
        return this.personService.getOne(id)
    }

    @Post()
    create(@Body() createPersonDTO: CreatePersonDTO){
        const person = new Person()
        person.uid = uuidv4()
        person.name = createPersonDTO.name
        person.surname = createPersonDTO.surname
        person.patronymic = createPersonDTO.patronymic
        person.age = createPersonDTO.age
        person.phoneNumber = createPersonDTO.phoneNumber
        person.company = createPersonDTO.company
        person.department = createPersonDTO.department
        person.position = createPersonDTO.position
        person.email = createPersonDTO.email
        person.description = createPersonDTO.description
        person.birthday = createPersonDTO.birthday
        return this.personService.create(person)
    }

    @Delete(':uid')
    remove(@Param('uid') uid: string): Promise<void>{
        return this.personService.remove(uid)
    }

    @Put(':id')
    update(@Body() updatePersonDTO: UpdatePersonDTO, @Param('id') id: string): Promise<Person> {
        const person = new Person()
        person.uid = updatePersonDTO.uid
        person.name = updatePersonDTO.name
        person.surname = updatePersonDTO.surname
        person.patronymic = updatePersonDTO.patronymic
        person.age = updatePersonDTO.age
        person.phoneNumber = updatePersonDTO.phoneNumber
        person.company = updatePersonDTO.company
        person.department = updatePersonDTO.department
        person.position = updatePersonDTO.position
        person.email = updatePersonDTO.email
        person.description = updatePersonDTO.description
        person.birthday = updatePersonDTO.birthday
        return this.personService.update(person)
    }
}