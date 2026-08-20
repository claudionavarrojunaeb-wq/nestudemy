import { IsString } from 'class-validator';

export class CreateCarDto {

    @IsString({message: `brand is required`})
    readonly brand!: string;

    @IsString({message: `model is required`})
    readonly model!: string;

}