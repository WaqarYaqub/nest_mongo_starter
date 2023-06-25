/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import docs from '../teacher.docs';

export class CreateTeacherDto{
    @ApiProperty(docs.name)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty(docs.email)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty(docs.gender)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;

    @ApiProperty(docs.password)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;
}
