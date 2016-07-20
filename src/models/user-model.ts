import { IModel } from './_namespace';

export class UserModel implements IModel {

    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public profileImage: string;

}
