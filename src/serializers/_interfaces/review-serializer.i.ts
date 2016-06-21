import { ReviewModel } from "../../models/models.namespace";
import { ReviewDto } from "../../dtos/dtos.namespace";

export interface IReviewSerializer {

    serialize (model: ReviewModel): ReviewDto;

}
