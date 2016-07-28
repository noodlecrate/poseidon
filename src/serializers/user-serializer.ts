import { injectable } from 'inversify';

import { Models, DTOs } from 'noodlecrate-poseidon-entities';
import { IUserSerializer } from './_namespace';

@injectable()
export class UserSerializer implements IUserSerializer {

    public serialize (model: Models.UserModel): DTOs.UserDto {
        return <DTOs.UserDto> {
            id: model.id,
            username: model.username,
            firstName: model.firstName,
            lastName: model.lastName,
            profileImage: model.profileImage
        };
    }

}
