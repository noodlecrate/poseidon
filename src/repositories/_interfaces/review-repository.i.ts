import { IGetAllRepository, IGetByIdRepository } from "../repositories.namespace";
import { ReviewModel } from "../../models/models.namespace";

export interface IReviewRepository
    extends IGetAllRepository<ReviewModel>, IGetByIdRepository<ReviewModel> {

}
