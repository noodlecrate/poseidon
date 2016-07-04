import { injectable } from "inversify";

import { IUserRepository } from "./_namespace";
import { UserModel } from "../models/_namespace";

@injectable()
export class UserRepository implements IUserRepository {

    private _users: Array<UserModel>;

    constructor () {
        this._users = [];

        this._users.push(<UserModel> {
            id: 1,
            username: "jameskmonger",
            password: "correct",
            firstName: "James",
            lastName: "Monger",
            profileImage: "https://avatars0.githubusercontent.com/u/2037007?v=3&s=460"
        });

        this._users.push(<UserModel> {
            id: 2,
            username: "james.richford",
            password: "correct",
            firstName: "James",
            lastName: "Richford",
            profileImage: "https://avatars2.githubusercontent.com/u/8244919?v=3&s=460"
        });

        this._users.push(<UserModel> {
            id: 3,
            username: "jf",
            password: "correct",
            firstName: "James",
            lastName: "Finnerty",
            profileImage: "https://avatars0.githubusercontent.com/u/4427207?v=3&s=460"
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
