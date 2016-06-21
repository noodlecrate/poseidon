import { ReviewDto } from "../../dtos/review-dto";

export interface IReviewManager {

    getAll(): Array<ReviewDto>;
    getById(id: number): ReviewDto;

}
