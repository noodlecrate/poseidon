import { injectable } from 'inversify';

import { Models, DTOs } from 'noodlecrate-poseidon-entities';
import { INoodleSerializer } from './_namespace';

@injectable()
export class NoodleSerializer implements INoodleSerializer {

    public serialize (model: Models.NoodleModel): DTOs.NoodleDto {
        return <DTOs.NoodleDto> {
            id: model.id,
            name: model.name
        };
    }

}
