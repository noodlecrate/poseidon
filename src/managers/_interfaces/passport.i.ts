import { UserModel } from "../../models/user-model";

export interface IPassport {

    serializeUser(
        callback: (user: UserModel, done: (error: Error, userId: number) => void) => void
    ): void;

    deserializeUser(
        callback: (userId: number, done: (error: Error, user: UserModel) => void) => void
    ): void;

    use(
        name: string,
        strategy: any
    ): void;

}
