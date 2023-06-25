/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherSchema } from './teacher.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }])],
  providers: [TeacherService],
  controllers: [TeacherController],
  exports: [TeacherService],
})
export class TeacherModule {}