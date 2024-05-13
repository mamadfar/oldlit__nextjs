import {IResponseWithPagination} from "@/types/common";
import {IContact} from "@/types/Contact.type";
import {IUserGeneral} from "@/types/User.type";

export interface ICreateBook {
  name: string;
  description: string;
  price: number;
  contactId: number;
  categoryNames: string[];
  images: string[];
}

interface Category {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface IBook {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
  hitCounter: number;
  isActive: boolean;
  isPremium: boolean;
  isSold: boolean;
  categories: Category[];
  user: IUserGeneral;
  contact: IContact;
}

export interface BooksResponse extends IResponseWithPagination {
  books: IBook[];
}

export interface ISingleBook {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
  hitCounter: number;
  categories: Category[];
  user: IUserGeneral;
  updatedAt: string;
  premiumEndsAt: string | null;
}