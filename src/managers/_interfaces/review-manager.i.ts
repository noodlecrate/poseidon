import { ReviewDto } from "../../dtos/dtos.namespace";

export interface IReviewManager {

    getAll(): Array<ReviewDto>;
    getById(id: number): ReviewDto;

}
