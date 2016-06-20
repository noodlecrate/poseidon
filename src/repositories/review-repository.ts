import { IReviewRepository } from "./_interfaces/review-repository.i";
import { IUserRepository } from "./_interfaces/user-repository.i";

import { ReviewModel } from "../models/review-model";


export class ReviewRepository implements IReviewRepository {

    private _userRepository: IUserRepository;
    private _reviews: Array<ReviewModel>;

    constructor (userRepository: IUserRepository) {
        this._userRepository = userRepository;

        this._reviews = [];
    }

    public getAll(): Array<ReviewModel> {
        return this._reviews;
    }

    public getById(id: number): ReviewModel {
        return this._reviews.filter(
            r => r.id === id
        )[0];
    }

}
