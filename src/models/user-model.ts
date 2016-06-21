import { IModel } from "./models.namespace";

export class UserModel implements IModel {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

}
