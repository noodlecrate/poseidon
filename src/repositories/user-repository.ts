import { injectable } from 'inversify';

import { Models } from 'noodlecrate-poseidon-entities';
import { IUserRepository } from './_namespace';

@injectable()
export class UserRepository implements IUserRepository {

    private _users: Array<Models.UserModel>;

    constructor () {
        this._users = [];

        this._createUser(1, 'jameskmonger', 'correct', 'James', 'Monger', 'https://avatars0.githubusercontent.com/u/2037007?v=3&s=460');
        this._createUser(2, 'james.richford', 'correct', 'James', 'Richford', 'https://avatars2.githubusercontent.com/u/8244919?v=3&s=460');
        this._createUser(3, 'jf', 'correct', 'James', 'Finnerty', 'https://avatars0.githubusercontent.com/u/4427207?v=3&s=460');
    }

    private _createUser(id: number, username: string, password: string, firstName: string, lastName: string, profileImage: string) {
        let model = new Models.UserModel();
        model.id = id;
        model.username = username;
        model.password = password;
        model.firstName = firstName;
        model.lastName = lastName;
        model.profileImage = profileImage;
        this._users.push(model);
    }

    public getAll(): Array<Models.UserModel> {
        return this._users;
    }

    public getById(id: number): Models.UserModel {
        return this._users.filter(
            u => u.id === id
        )[0];
    }

    public getByUsername(username: string): Models.UserModel {
        return this._users.filter(
            u => u.username === username
        )[0];
    }

}
