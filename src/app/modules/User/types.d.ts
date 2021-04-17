/** @format */

export interface IUserState {
  id: string | number | null;
  name: string | null;
  email: string | null;
  birth: Date | null;
  fabrica: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  roles: Role[];
  loading: false | 'pending' | 'succeeded' | 'failed';
  initials: string | null;
  firstName: string | null;
  active: boolean;
  lastName: string | null;
}
export interface Role {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResponseUserRequest {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  birth: Date;
  status: string;
  codfabrica: number;
  codsetor: number;
  createdAt: Date;
  updatedAt: Date;
}

type Fabrica = {
  codigo: number;
  descricao: string;
};
export interface ResponseFactoryRequest {
  data: Fabrica[];
}
