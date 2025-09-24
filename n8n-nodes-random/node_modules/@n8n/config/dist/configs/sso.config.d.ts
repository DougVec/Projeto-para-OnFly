declare class SamlConfig {
    loginEnabled: boolean;
    loginLabel: string;
}
declare class OidcConfig {
    loginEnabled: boolean;
}
declare class LdapConfig {
    loginEnabled: boolean;
    loginLabel: string;
}
export declare class SsoConfig {
    justInTimeProvisioning: boolean;
    redirectLoginToSso: boolean;
    saml: SamlConfig;
    oidc: OidcConfig;
    ldap: LdapConfig;
}
export {};
