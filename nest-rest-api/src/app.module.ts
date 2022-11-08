import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { KeycloakConfigService } from './config/keycloak-config.service';
import { CoreModule } from './core/core.module';
import { PersonModule } from './persons/persons.module';
import { Person } from './persons/schemas/person.schema';



@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwaszx98',
      database: 'ildar',
      entities: [Person],
      synchronize: true,
      //autoLoadEntities: true
    }
  ),
  PersonModule,
  ],
providers: [
  AppService,
  // {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard,
  // },
  // {
  //   provide: APP_GUARD,
  //   useClass: ResourceGuard,
  // },
  // {
  //   provide: APP_GUARD,
  //   useClass: RoleGuard,
  // },
],
controllers: [AppController],
})
export class AppModule {}
