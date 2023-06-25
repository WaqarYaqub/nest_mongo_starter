/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import docs from '../students.docs';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto{
    @ApiProperty(docs.name)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty(docs.roleNo)
    @IsNumber()
    @IsNotEmpty()
    readonly roleNo: number;

    @ApiProperty(docs.class)
    @IsNumber()
    @IsNotEmpty()
    readonly class: number;

    @ApiProperty(docs.gender)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;

    @ApiProperty(docs.marks)
    @IsNumber()
    @IsNotEmpty()
    readonly marks: number;

    @ApiProperty(docs.password)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;
}
