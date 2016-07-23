import { injectable } from 'inversify';

import { IBrandSerializer } from './_namespace';
import { BrandModel } from '../models/_namespace';
import { BrandDto } from '../dtos/_namespace';

@injectable()
export class BrandSerializer implements IBrandSerializer {

    public serialize (model: BrandModel): BrandDto {
        return <BrandDto> {
            id: model.id,
            name: model.name
        };
    }

}
