import { IGetAllRepository, IGetByIdRepository } from "../repositories.namespace";
import { UserModel } from "../../models/models.namespace";

export interface IUserRepository
    extends IGetAllRepository<UserModel>, IGetByIdRepository<UserModel> {

    getByUsername(username: string): UserModel;

}
