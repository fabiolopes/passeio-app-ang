import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from '../environments/environment';

export const auth: AuthConfig = {
    issuer: environment.auth.issuer,
    redirectUri: environment.auth.redirectUri,
    clientId: environment.auth.clientId,
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}