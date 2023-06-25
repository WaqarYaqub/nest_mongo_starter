/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateGradeDto } from './create-grade.dto';


export class UpdateGradeDto extends PartialType(CreateGradeDto){
    
}
