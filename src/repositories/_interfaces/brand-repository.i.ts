import { IGetByIdRepository } from '../_namespace';
import { BrandModel } from '../../models/_namespace';

export interface IBrandRepository
    extends IGetByIdRepository<BrandModel> {

}
