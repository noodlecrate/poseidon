import { UserModel } from "../../models/models.namespace";
import { UserDto } from "../../dtos/dtos.namespace";

export interface IUserSerializer {

    serialize (model: UserModel): UserDto;

}
