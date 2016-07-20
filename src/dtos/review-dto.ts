import { UserDto } from './_namespace';

export class ReviewDto {

    public id: number;
    public author: UserDto;
    public title: string;
    public body: string;
    public imageUrl: string;

}
