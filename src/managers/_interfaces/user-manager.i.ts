import { UserModel } from "../../models/_namespace";

export interface IUserManager {

    attemptLogin (username: string, password: string): UserModel;
    getById (id: number): UserModel;

}
