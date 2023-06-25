/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherService } from './service/teacher.service';
import { TeacherController } from './controller/teacher.controller';
import { TeacherSchema } from './schema/teacher.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }])],
  providers: [TeacherService],
  controllers: [TeacherController],
  exports: [TeacherService],
})
export class TeacherModule {}