import { ReviewModel } from "../../models/review-model";
import { ReviewDto } from "../../dtos/review-dto";

export interface IReviewSerializer {

    serialize (model: ReviewModel): ReviewDto;

}
