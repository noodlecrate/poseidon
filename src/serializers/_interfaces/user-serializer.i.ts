import { Models, DTOs } from 'noodlecrate-poseidon-entities';

export interface IUserSerializer {

    serialize (model: Models.UserModel): DTOs.UserDto;

}
