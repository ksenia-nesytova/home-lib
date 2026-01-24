import { IsString } from "class-validator";

export class CreateEntityDto {
    @IsString()
    name: string;


}
