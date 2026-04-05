import { Type } from "class-transformer";
import { IsArray, isArray, IsInt, IsOptional, IsString, Min } from "class-validator";

export class SearchMediaEntityDto {
    @IsOptional()
    @IsString()
    query: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit: number = 20;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];
}