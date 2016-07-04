import { UserModel } from "../../models/_namespace";
import { UserDto } from "../../dtos/_namespace";

export interface IUserManager {

    attemptLogin (username: string, password: string): UserModel;
    getById (id: number): UserDto;
    getModelById (id: number): UserModel;

}
