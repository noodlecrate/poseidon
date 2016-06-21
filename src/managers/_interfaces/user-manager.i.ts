import { UserModel } from "../../models/models.namespace";

export interface IUserManager {

    attemptLogin (username: string, password: string): UserModel;
    getById (id: number): UserModel;

}
