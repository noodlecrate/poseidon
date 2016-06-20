import { UserDto } from "./user-dto";

export class ReviewDto {

    id: number;
    author: UserDto;
    title: string;
    body: string;
    imageUrl: string;

}
