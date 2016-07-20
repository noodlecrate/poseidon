import { ReviewModel } from '../../models/_namespace';
import { ReviewDto } from '../../dtos/_namespace';

export interface IReviewSerializer {

    serialize (model: ReviewModel): ReviewDto;

}
