import { Models } from 'noodlecrate-poseidon-entities';

import { IGetByIdRepository } from '../_namespace';

export interface INoodleRepository
    extends IGetByIdRepository<Models.NoodleModel> {

}
