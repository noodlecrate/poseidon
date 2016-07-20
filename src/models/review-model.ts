import { IModel, UserModel } from './_namespace';

export class ReviewModel implements IModel {

    public id: number;
    public author: UserModel;
    public title: string;
    public body: string;
    public imageUrl: string;

}
