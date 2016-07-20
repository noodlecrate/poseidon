import { IGetByIdRepository } from '../_namespace';
import { NoodleModel } from '../../models/_namespace';

export interface INoodleRepository
    extends IGetByIdRepository<NoodleModel> {

}
