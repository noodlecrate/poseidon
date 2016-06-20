import { IGetAllRepository } from "./generic/get-all-repository.i";
import { IGetByIdRepository } from "./generic/get-by-id-repository.i";
import { ReviewModel } from "../../models/review-model";

export interface IReviewRepository
    extends IGetAllRepository<ReviewModel>, IGetByIdRepository<ReviewModel> {

}
