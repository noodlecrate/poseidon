import { UserModel } from "../models/user-model";
import { UserDto } from "../dtos/user-dto";

export class UserSerializer {

    public serialize (model: UserModel): UserDto {
        return <UserDto> {
            id: model.id,
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName
        }
    }

}
