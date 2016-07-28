import { inject, injectable } from 'inversify';

import { DTOs, Models } from 'noodlecrate-poseidon-entities';
import { IUserRepository } from '../repositories/_namespace';
import { IUserManager } from './_namespace';
import { IUserSerializer } from '../serializers/_namespace';

@injectable()
export class UserManager implements IUserManager {

    private _userRepository: IUserRepository;
    private _userSerializer: IUserSerializer;

    constructor (
        @inject('IUserRepository') userRepository: IUserRepository,
        @inject('IUserSerializer') userSerializer: IUserSerializer
    ) {
        this._userRepository = userRepository;
        this._userSerializer = userSerializer;
    }

    public attemptLogin (username: string, password: string): Models.UserModel {
        let matches = this._userRepository.getAll().filter(
            u => u.username === username && u.password === password
        );

        return matches[0];
    }

    public getModelById (id: number): Models.UserModel {
        return this._userRepository.getById(id);
    }

    public getById (id: number): DTOs.UserDto {
        let model = this._userRepository.getById(id);

        return this._userSerializer.serialize(model);
    }

}
