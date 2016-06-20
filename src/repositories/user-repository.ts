import { IUserRepository } from "./_interfaces/user-repository.i";

import { UserModel } from "../models/user-model";

export class UserRepository implements IUserRepository {

    private _users: Array<UserModel>;

    constructor () {
        this._users = [];

        this._users.push(<UserModel> {
            id: 1,
            username: "jameskmonger",
            password: "correct"
        });

        this._users.push(<UserModel> {
            id: 2,
            username: "james.richford",
            password: "correct"
        });

        this._users.push(<UserModel> {
            id: 3,
            username: "jf",
            password: "correct"
        });
    }

    public getAll(): Array<UserModel> {
        return this._users;
    }

    public getById(id: number): UserModel {
        return this._users.filter(
            u => u.id === id
        )[0];
    }

    public getByUsername(username: string): UserModel {
        return this._users.filter(
            u => u.username === username
        )[0];
    }

}
