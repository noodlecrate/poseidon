import { ReviewDto } from "../../dtos/_namespace";

export interface IReviewManager {

    getAll(): Array<ReviewDto>;
    getById(id: number): ReviewDto;

}
