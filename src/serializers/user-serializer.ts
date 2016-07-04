import { injectable } from "inversify";

import { UserModel } from "../models/_namespace";
import { UserDto } from "../dtos/_namespace";
import { IUserSerializer } from "./_namespace";

@injectable()
export class UserSerializer implements IUserSerializer {

    public serialize (model: UserModel): UserDto {
        return <UserDto> {
            id: model.id,
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName,
            profileImage: model.profileImage
        }
    }

}
