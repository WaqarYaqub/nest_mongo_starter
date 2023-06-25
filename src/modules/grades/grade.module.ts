/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GradeSchema } from './schema/grade.schema';
import { GradeService } from './service/grade.service';
import { GradeController } from './controller/grade.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Grade', schema: GradeSchema }])],
  providers: [GradeService],
  controllers: [GradeController],
  exports: [GradeService],
})
export class GradeModule {}