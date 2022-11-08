import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthGuard } from "nest-keycloak-connect";
import { ConfigModule } from "src/config/config.module";
import { CoreModule } from "src/core/core.module";
import { PersonService } from "./persons-service";
import { PersonsController } from "./persons.controller";
import { Person } from "./schemas/person.schema";


@Module({
    imports: [TypeOrmModule.forFeature([Person]),CoreModule],
    providers: [PersonService],
    controllers: [PersonsController],
})
export class PersonModule{
    
}