import { IGetAllRepository, IGetByIdRepository } from "../_namespace";
import { UserModel } from "../../models/_namespace";

export interface IUserRepository
    extends IGetAllRepository<UserModel>, IGetByIdRepository<UserModel> {

    getByUsername(username: string): UserModel;

}
