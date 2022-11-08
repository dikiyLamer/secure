"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakConfigService = void 0;
const common_1 = require("@nestjs/common");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
let KeycloakConfigService = class KeycloakConfigService {
    createKeycloakConnectOptions() {
        return {
            authServerUrl: 'http://127.0.0.1:8080/',
            realm: 'test-realm',
            clientId: 'backend-client',
            secret: 'HX4wVKRVITArVsCey6edAYNNvwC0dMRZ',
            cookieKey: 'KEYCLOAK_JWT',
            logLevels: ['verbose'],
            "confidential-port": 0,
            useNestLogger: true,
            policyEnforcement: nest_keycloak_connect_1.PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: nest_keycloak_connect_1.TokenValidation.ONLINE,
            verifyTokenAudience: true,
            "ssl-required": "external",
            realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp0xcGaKVKor6VzcnKQiwQQ1ZXylmhAG/48Kr1aOv0QtKKTnE5RHktvOMfBGPkBtgVqwxicbm5Kn+10ubBngnYdZq+RKtTb06DGq0DO06v7KyC+nwBuRFGHHsOfL5+5dvTZbC7faXquLEhAx7nEwkWp9Tjl2aeJijsLvoDd1QYsodf3WHZuWJm3MkpCzJQcy+YdyBc2K3mIVLqgkpFYHQyxmyeex89TGywSVg7C2M6fzbxLELHqjDI+ItDl0uGmFtXpCJtzKSIbVFCdS12QzBPXZWSZ9jXH7ZHmaP4/qsOqs5nl9GageorjCz9uTCVOyRlvzdp4PvIOOSbisn11xRaQIDAQAB'
        };
    }
};
KeycloakConfigService = __decorate([
    (0, common_1.Injectable)()
], KeycloakConfigService);
exports.KeycloakConfigService = KeycloakConfigService;
//# sourceMappingURL=keycloak-config.service.js.map