import { Models, DTOs } from 'noodlecrate-poseidon-entities';

export interface IUserManager {

    attemptLogin (username: string, password: string): Models.UserModel;
    getById (id: number): DTOs.UserDto;
    getModelById (id: number): Models.UserModel;

}
