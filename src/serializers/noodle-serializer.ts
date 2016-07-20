import { injectable } from "inversify";

import { INoodleSerializer } from "./_namespace";
import { NoodleModel } from "../models/_namespace";
import { NoodleDto } from "../dtos/_namespace";

@injectable()
export class NoodleSerializer implements INoodleSerializer {

    public serialize (model: NoodleModel): NoodleDto {
        return <NoodleDto> {
            id: model.id,
            name: model.name
        }
    }

}
