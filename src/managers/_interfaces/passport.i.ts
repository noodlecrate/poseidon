import { Strategy } from "passport";

import { UserModel } from "../../models/_namespace";

export interface IPassport {

    serializeUser(
        callback: (user: UserModel, done: (error: Error, userId: number) => void) => void
    ): void;

    deserializeUser(
        callback: (userId: number, done: (error: Error, user: UserModel) => void) => void
    ): void;

    use(
        name: string,
        strategy: Strategy
    ): void;

    authenticate(
        strategy: Strategy,
        callback: Function
    ): any;

}
