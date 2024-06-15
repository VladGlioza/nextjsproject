import { ISaleCart } from "./Market";

export interface IAccount {
    name: string;
    phone_number: string | null;
}

export interface IProfile {
    account: IAccount;
    sales: ISaleCart[];
}
