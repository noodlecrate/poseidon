import { inject, injectable } from "inversify";

import { IUserSerializer } from "./_interfaces/user-serializer.i";
import { ReviewModel } from "../models/review-model";
import { ReviewDto } from "../dtos/review-dto";
import { IReviewSerializer } from "./_interfaces/review-serializer.i";

@injectable()
export class ReviewSerializer implements IReviewSerializer {

    private _userSerializer: IUserSerializer;

    constructor (
        @inject("IUserSerializer") userSerializer: IUserSerializer
    ) {
        this._userSerializer = userSerializer;
    }

    public serialize (model: ReviewModel): ReviewDto {
        return <ReviewDto> {
            id: model.id,
            title: model.title,
            body: model.body,
            imageUrl: model.imageUrl,
            author: this._userSerializer.serialize(model.author)
        }
    }

}
