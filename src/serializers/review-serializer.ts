import { inject, injectable } from 'inversify';

import { Models, DTOs } from 'noodlecrate-poseidon-entities';
import { IUserSerializer, IReviewSerializer } from './_namespace';

@injectable()
export class ReviewSerializer implements IReviewSerializer {

    private _userSerializer: IUserSerializer;

    constructor (
        @inject('IUserSerializer') userSerializer: IUserSerializer
    ) {
        this._userSerializer = userSerializer;
    }

    public serialize (model: Models.ReviewModel): DTOs.ReviewDto {
        return <DTOs.ReviewDto> {
            id: model.id,
            title: model.title,
            body: model.body,
            imageUrl: model.imageUrl,
            author: this._userSerializer.serialize(model.author)
        };
    }

}
