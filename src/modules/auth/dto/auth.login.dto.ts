/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import docs from '../auth.docs';

export class AuthLoginDto{
    @ApiProperty(docs.name)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty(docs.password)
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;
}
