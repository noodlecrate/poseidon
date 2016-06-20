import { UserModel } from "../models/user-model";
import { UserRepository } from "../repositories/user-repository";

export class UserManager {

    private _userRepository: UserRepository;

    constructor (userRepository: UserRepository) {
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
