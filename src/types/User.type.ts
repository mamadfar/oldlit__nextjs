

export interface IUserGeneral {
    dateJoined: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUserResponse {
    dateJoined: string;
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    isEmailVerified: boolean;
}

export interface IUpdateUser {
    firstName?: string;
    lastName?: string;
}