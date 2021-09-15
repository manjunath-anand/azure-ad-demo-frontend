import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://login.microsoftonline.com/<tenant id>/v2.0',
    redirectUri: window.location.origin + '/dashboard',
    clientId: '<client id>',
    responseType: 'code',
    strictDiscoveryDocumentValidation: false,
    scope: 'openid api://<client id>/app',
}
