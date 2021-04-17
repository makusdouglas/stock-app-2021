export interface ValidateErrorEntity<Values = any> {
    values: Values;
    errorFields: {
        name: InternalNamePath;
        errors: string[];
    }[];
    outOfDate: boolean;
}
export type InternalNamePath = (string | number)[];

// ****** Redux Slice State interface *******
export interface IAuthState {
    email: string,
    password: string,
    rememberCredentials?: boolean,
}