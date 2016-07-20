import { UserModel } from '../../models/_namespace';
import { UserDto } from '../../dtos/_namespace';

export interface IUserSerializer {

    serialize (model: UserModel): UserDto;

}
