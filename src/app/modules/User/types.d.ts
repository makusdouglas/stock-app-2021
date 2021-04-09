export interface IUserState {
    name: string | null;
    email: string | null;
    birth: Date | null;
    fabrica: number | null;
    permissions: string[];
    loading: false | 'pending' | 'succeeded' | 'failed';
    initials: string | null;
    firstName: string | null;
    lastName: string | null;
}

export interface ResponseUserRequest {
    data: {
        id: number,
        name: string,
        full_name: string,
        email: string,
        isVerified: number,
        isAdmin: boolean,
        creationDate: Date,
        lastChange: Date,
        deletedDate: null,
        user_name: string,
        status: number,
        foto: string,
        codfabrica: number,
        codsetor: number,
        data_nascimento: Date
    }
}

type Fabrica = {
    codigo: number,
    descricao: string
}
export interface ResponseFactoryRequest {
    data: Fabrica[],
}