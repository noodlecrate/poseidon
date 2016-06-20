import { UserModel } from "../models/user-model";

export class UserManager {

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

    public attemptLogin (username: string, password: string): boolean {
        let matches = this._users.filter(
            u => u.username === username && u.password === password
        );

        return (matches.length !== 0);
    }

}
