import { IModel } from "./_namespace";

export class UserModel implements IModel {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    profileImage: string;

}
