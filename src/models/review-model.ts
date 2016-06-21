import { IModel, UserModel } from "./_namespace";

export class ReviewModel implements IModel {

    id: number;
    author: UserModel;
    title: string;
    body: string;
    imageUrl: string;

}
