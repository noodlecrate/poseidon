import { UserModel } from "../../models/user-model";

export interface IUserManager {

    attemptLogin (username: string, password: string): UserModel;
    getById (id: number): UserModel;

}
