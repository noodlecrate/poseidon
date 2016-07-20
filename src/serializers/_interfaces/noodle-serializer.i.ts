import { NoodleModel } from '../../models/_namespace';
import { NoodleDto } from '../../dtos/_namespace';

export interface INoodleSerializer {

    serialize (model: NoodleModel): NoodleDto;

}
