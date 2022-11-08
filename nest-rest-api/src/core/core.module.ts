import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { ConfigModule } from 'src/config/config.module';
import { KeycloakConfigService } from 'src/config/keycloak-config.service';

@Module({
    imports: [
        KeycloakConnectModule.registerAsync({
        useExisting: KeycloakConfigService,
        imports: [ConfigModule]
      }),],
    exports: [KeycloakConnectModule]
})
export class CoreModule {}