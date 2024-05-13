import API from "@/config/API";
import {IContactsResponse, ICreateContact} from "@/types/Contact.type";

export const GetContactsService = () => {
    return API.get<IContactsResponse>('/contacts');
}

export const CreateContactService = (payload: ICreateContact) => {
    return API.post('/contacts', payload);
}