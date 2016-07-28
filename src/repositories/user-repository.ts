import { injectable } from 'inversify';

import { Models } from 'noodlecrate-poseidon-entities';
import { IUserRepository } from './_namespace';

@injectable()
export class UserRepository implements IUserRepository {

    private _users: Array<Models.UserModel>;

    constructor () {
        this._users = [];

        this._users.push(<Models.UserModel> {
            id: 1,
            username: 'jameskmonger',
            password: 'correct',
            firstName: 'James',
            lastName: 'Monger',
            profileImage: 'https://avatars0.githubusercontent.com/u/2037007?v=3&s=460'
        });

        this._users.push(<Models.UserModel> {
            id: 2,
            username: 'james.richford',
            password: 'correct',
            firstName: 'James',
            lastName: 'Richford',
            profileImage: 'https://avatars2.githubusercontent.com/u/8244919?v=3&s=460'
        });

        this._users.push(<Models.UserModel> {
            id: 3,
            username: 'jf',
            password: 'correct',
            firstName: 'James',
            lastName: 'Finnerty',
            profileImage: 'https://avatars0.githubusercontent.com/u/4427207?v=3&s=460'
        });
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
