import { IModel } from "./_interfaces/model.i";
import { UserModel } from "./user-model";

export class ReviewModel implements IModel {

    id: number;
    author: UserModel;
    title: string;
    body: string;
    imageUrl: string;

}
