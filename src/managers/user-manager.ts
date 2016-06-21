import { inject, injectable } from "inversify";

import { UserModel } from "../models/models.namespace";
import { IUserRepository } from "../repositories/repositories.namespace";
import { IUserManager } from "./managers.namespace";

@injectable()
export class UserManager implements IUserManager {

    private _userRepository: IUserRepository;

    constructor (
        @inject("IUserRepository") userRepository: IUserRepository
    ) {
        this._userRepository = userRepository;
    }

    public attemptLogin (username: string, password: string): UserModel {
        let matches = this._userRepository.getAll().filter(
            u => u.username === username && u.password === password
        );

        return matches[0];
    }

    public getById (id: number): UserModel {
        return this._userRepository.getById(id);
    }

}
