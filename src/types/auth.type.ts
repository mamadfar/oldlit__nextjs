
export type AuthState_Type = 'LOGIN' | 'REGISTER';

export type LoginStateForm_Type = {
  username: string;
  password: string;
}

export type RegisterStateForm_Type = {
    email: string;
    password: string;
    confirm_password: string;
}