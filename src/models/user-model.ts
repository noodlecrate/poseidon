import { IModel } from "./_interfaces/model.i";

export class UserModel implements IModel {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

}
