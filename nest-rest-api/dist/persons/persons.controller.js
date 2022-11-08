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
exports.PersonsController = void 0;
const common_1 = require("@nestjs/common");
const create_person_dto_1 = require("./DTO/create-person.dto");
const persons_service_1 = require("./persons-service");
const update_person_dto_1 = require("./DTO/update-person.dto");
const person_schema_1 = require("./schemas/person.schema");
const uuid_1 = require("uuid");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let PersonsController = class PersonsController {
    constructor(personService) {
        this.personService = personService;
    }
    getAll() {
        return this.personService.findAll();
    }
    getOne(id) {
        return this.personService.getOne(id);
    }
    create(createPersonDTO) {
        const person = new person_schema_1.Person();
        person.uid = (0, uuid_1.v4)();
        person.name = createPersonDTO.name;
        person.surname = createPersonDTO.surname;
        person.patronymic = createPersonDTO.patronymic;
        person.age = createPersonDTO.age;
        person.phoneNumber = createPersonDTO.phoneNumber;
        person.company = createPersonDTO.company;
        person.department = createPersonDTO.department;
        person.position = createPersonDTO.position;
        person.email = createPersonDTO.email;
        person.description = createPersonDTO.description;
        person.birthday = createPersonDTO.birthday;
        return this.personService.create(person);
    }
    remove(uid) {
        return this.personService.remove(uid);
    }
    update(updatePersonDTO, id) {
        const person = new person_schema_1.Person();
        person.uid = updatePersonDTO.uid;
        person.name = updatePersonDTO.name;
        person.surname = updatePersonDTO.surname;
        person.patronymic = updatePersonDTO.patronymic;
        person.age = updatePersonDTO.age;
        person.phoneNumber = updatePersonDTO.phoneNumber;
        person.company = updatePersonDTO.company;
        person.department = updatePersonDTO.department;
        person.position = updatePersonDTO.position;
        person.email = updatePersonDTO.email;
        person.description = updatePersonDTO.description;
        person.birthday = updatePersonDTO.birthday;
        return this.personService.update(person);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, nest_keycloak_connect_1.Roles)({ roles: ['user'] }),
    (0, common_1.UseGuards)(nest_keycloak_connect_1.RoleGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_dto_1.CreatePersonDTO]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':uid'),
    __param(0, (0, common_1.Param)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_person_dto_1.UpdatePersonDTO, String]),
    __metadata("design:returntype", Promise)
], PersonsController.prototype, "update", null);
PersonsController = __decorate([
    (0, common_1.Controller)('api/persons'),
    (0, common_1.UseGuards)(nest_keycloak_connect_1.AuthGuard),
    __metadata("design:paramtypes", [persons_service_1.PersonService])
], PersonsController);
exports.PersonsController = PersonsController;
//# sourceMappingURL=persons.controller.js.map