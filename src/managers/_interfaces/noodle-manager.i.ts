import { NoodleDto } from "../../dtos/_namespace";

export interface INoodleManager {

    getById(id: number): NoodleDto;

}
