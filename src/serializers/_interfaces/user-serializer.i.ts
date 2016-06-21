import { UserModel } from "../../models/user-model";
import { UserDto } from "../../dtos/user-dto";

export interface IUserSerializer {

    serialize (model: UserModel): UserDto;

}
