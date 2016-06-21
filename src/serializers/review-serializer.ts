import { UserSerializer } from "./user-serializer";
import { ReviewModel } from "../models/review-model";
import { ReviewDto } from "../dtos/review-dto";
import { IReviewSerializer } from "./_interfaces/review-serializer.i";

export class ReviewSerializer implements IReviewSerializer {

    private _userSerializer: UserSerializer;

    constructor (userSerializer: UserSerializer) {
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
