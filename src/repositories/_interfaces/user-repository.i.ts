import { IGetAllRepository } from "./generic/get-all-repository.i";
import { IGetByIdRepository } from "./generic/get-by-id-repository.i";
import { UserModel } from "../../models/user-model";

export interface IUserRepository
    extends IGetAllRepository<UserModel>, IGetByIdRepository<UserModel> {

    getByUsername(username: string): UserModel;

}
