import { Models } from 'noodlecrate-poseidon-entities';

import { IGetAllRepository, IGetByIdRepository } from '../_namespace';

export interface IUserRepository
    extends IGetAllRepository<Models.UserModel>, IGetByIdRepository<Models.UserModel> {

    getByUsername(username: string): Models.UserModel;

}
