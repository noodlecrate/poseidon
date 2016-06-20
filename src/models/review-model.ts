import { UserModel } from "./user-model";

export class ReviewModel {

    id: number;
    author: UserModel;
    title: string;
    body: string;
    imageUrl: string;

}
