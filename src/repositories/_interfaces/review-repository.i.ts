import { Models } from 'noodlecrate-poseidon-entities';

import { IGetAllRepository, IGetByIdRepository, ISaveRepository } from '../_namespace';

export interface IReviewRepository
    extends IGetAllRepository<Models.ReviewModel>, IGetByIdRepository<Models.ReviewModel>, ISaveRepository<Models.ReviewModel> {

}
