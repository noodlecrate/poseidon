import { inject, injectable } from 'inversify';

import { IUserSerializer, IReviewSerializer } from './_namespace';
import { ReviewModel } from '../models/_namespace';
import { ReviewDto } from '../dtos/_namespace';

@injectable()
export class ReviewSerializer implements IReviewSerializer {

    private _userSerializer: IUserSerializer;

    constructor (
        @inject('IUserSerializer') userSerializer: IUserSerializer
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
        };
    }

}
