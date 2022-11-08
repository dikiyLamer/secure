import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
return {
  authServerUrl: 'http://127.0.0.1:8080/',
  realm: 'test-realm',
  clientId: 'backend-client',
  secret: 'HX4wVKRVITArVsCey6edAYNNvwC0dMRZ',
  cookieKey: 'KEYCLOAK_JWT',
  logLevels: ['verbose'],
  "confidential-port": 0,
  useNestLogger: true,
  policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
  tokenValidation: TokenValidation.ONLINE,
  verifyTokenAudience: true,
  "ssl-required": "external",
  realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp0xcGaKVKor6VzcnKQiwQQ1ZXylmhAG/48Kr1aOv0QtKKTnE5RHktvOMfBGPkBtgVqwxicbm5Kn+10ubBngnYdZq+RKtTb06DGq0DO06v7KyC+nwBuRFGHHsOfL5+5dvTZbC7faXquLEhAx7nEwkWp9Tjl2aeJijsLvoDd1QYsodf3WHZuWJm3MkpCzJQcy+YdyBc2K3mIVLqgkpFYHQyxmyeex89TGywSVg7C2M6fzbxLELHqjDI+ItDl0uGmFtXpCJtzKSIbVFCdS12QzBPXZWSZ9jXH7ZHmaP4/qsOqs5nl9GageorjCz9uTCVOyRlvzdp4PvIOOSbisn11xRaQIDAQAB'
      };
  
}
}