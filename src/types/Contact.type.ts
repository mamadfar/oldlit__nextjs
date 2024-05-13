import {IResponseWithPagination} from "@/types/common";

export interface ICreateContact {
    phoneNumber: string
    isDeliverable: boolean
    notes: string
    fromAddress: string
}

export interface IContact {
    createdAt: string;
    fromAddress: string;
    id: number;
    isDeliverable: boolean;
    notes: string;
    phoneNumber: string;
    updatedAt: string;
}

export interface IContactsResponse extends IResponseWithPagination {
    contacts: IContact[]
}