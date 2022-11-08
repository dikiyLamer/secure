"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const person_schema_1 = require("./schemas/person.schema");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async findAll() {
        return await this.personRepository.find();
    }
    async getOne(uid) {
        return await this.personRepository.query(`select * from person where "uid"='${uid}'`);
    }
    async remove(uid) {
        await this.personRepository.query(`delete from person where "uid"='${uid}'`);
    }
    async create(person) {
        await this.personRepository.save(person);
    }
    async update(person) {
        const uid = person.uid;
        const entityToUpdate = await this.personRepository.findOneBy({ uid });
        entityToUpdate.name = person.name;
        entityToUpdate.surname = person.surname;
        entityToUpdate.patronymic = person.patronymic;
        entityToUpdate.age = person.age;
        entityToUpdate.phoneNumber = person.phoneNumber;
        entityToUpdate.company = person.company;
        entityToUpdate.department = person.department;
        entityToUpdate.position = person.position;
        entityToUpdate.email = person.email;
        entityToUpdate.description = person.description;
        entityToUpdate.birthday = person.birthday;
        return await this.personRepository.save(entityToUpdate);
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(person_schema_1.Person)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=persons-service.js.map