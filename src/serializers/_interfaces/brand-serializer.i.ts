import { BrandModel } from '../../models/_namespace';
import { BrandDto } from '../../dtos/_namespace';

export interface IBrandSerializer {

    serialize (model: BrandModel): BrandDto;

}
