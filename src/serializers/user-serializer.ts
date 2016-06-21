import { injectable } from "inversify";

import { UserModel } from "../models/models.namespace";
import { UserDto } from "../dtos/dtos.namespace";
import { IUserSerializer } from "./serializers.namespace";

@injectable()
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
