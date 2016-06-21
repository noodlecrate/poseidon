import { UserModel } from "../models/user-model";
import { UserDto } from "../dtos/user-dto";
import { IUserSerializer } from "./_interfaces/user-serializer.i";

export class UserSerializer implements IUserSerializer {

    public serialize (model: UserModel): UserDto {
        return <UserDto> {
            id: model.id,
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName
        }
    }

}
