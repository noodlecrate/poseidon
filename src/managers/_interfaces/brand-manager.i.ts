import { BrandDto } from '../../dtos/_namespace';

export interface IBrandManager {

    getById(id: number): BrandDto;

}
