import { UserDto } from "./dtos.namespace";

export class ReviewDto {

    id: number;
    author: UserDto;
    title: string;
    body: string;
    imageUrl: string;

}
