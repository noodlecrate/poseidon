import { injectable } from 'inversify';

import { Models, DTOs } from 'noodlecrate-poseidon-entities';
import { IBrandSerializer } from './_namespace';

@injectable()
export class BrandSerializer implements IBrandSerializer {

    public serialize (model: Models.BrandModel): DTOs.BrandDto {
        return <DTOs.BrandDto> {
            id: model.id,
            name: model.name
        };
    }

}
