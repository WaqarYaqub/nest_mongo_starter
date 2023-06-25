/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Grade } from 'src/modules/grades/schema/grade.schema';
import { Teacher } from '../teachers/teacher.schema';

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  roleNo: number;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
  @Prop()
  password: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required:true }] })
  teacher: [Teacher]
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required:true }] })
  grade: [Grade]
}
export const StudentSchema = SchemaFactory.createForClass(Student);