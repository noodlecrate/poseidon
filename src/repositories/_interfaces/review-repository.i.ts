import { IGetAllRepository, IGetByIdRepository } from "../_namespace";
import { ReviewModel } from "../../models/_namespace";

export interface IReviewRepository
    extends IGetAllRepository<ReviewModel>, IGetByIdRepository<ReviewModel> {

}
