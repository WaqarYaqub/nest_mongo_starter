/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITeacher } from '../Interface/teacher.interface';
import { CreateTeacherDto } from '../dto/create.teacher.dto';

@Injectable()
export class TeacherService {
  constructor(@InjectModel('Teacher') private teacherModel: Model<ITeacher>) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<ITeacher> {
    const newTeacher = await new this.teacherModel(createTeacherDto);
    return newTeacher.save();
  }

  async getTeacher(teacherId: string): Promise<ITeacher> {
    const existingTeacher = await this.teacherModel.findById(teacherId).populate('grade',['name']).populate('student',['name','roleNo','class','gender','marks']);
    if (!existingTeacher) {
      throw new NotFoundException(`Student #${teacherId} not found`);
    }
    return existingTeacher;
  }



    //RelationShips

    async addGrade(teacherId: string, gradeId: string): Promise<ITeacher> {
      const addgrade = await this.teacherModel.findByIdAndUpdate(
        teacherId,
        { $addToSet: { grade: gradeId }}, { new:true }
        ).populate('grade');
        
      if (!addgrade) {
        throw new NotFoundException(`Error not found`);
      }
      return addgrade;
    }


    async addStudent(teacherId: string, studentId: string): Promise<ITeacher> {
      const addstudent = await this.teacherModel.findByIdAndUpdate(
        teacherId,
        { $addToSet: { student: studentId }}, { new:true }
        ).populate('student');
      if (!addstudent) {
        throw new NotFoundException(`Error not found`);
      }
      return addstudent;
    }
}
