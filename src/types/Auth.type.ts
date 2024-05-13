
export type AuthState_Type = 'LOGIN' | 'REGISTER';

export type LoginStateForm_Type = {
    email: string;
  password: string;
}

export type RegisterStateForm_Type = {
    email: string;
    password1: string;
    password2: string;
    firstname?: string;
    lastname?: string;
}

export interface ISignUpPayload {
    email: string;
    password1: string;
    password2: string;
    firstname?: string;
    lastname?: string;
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
}