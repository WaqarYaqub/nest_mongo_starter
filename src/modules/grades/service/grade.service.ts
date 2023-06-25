/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGrade } from '../interface/grade.interface';
import { CreateGradeDto } from '../dto/create-grade.dto';

@Injectable()
export class GradeService {
  constructor(@InjectModel('Grade') private gradeModel: Model<IGrade>) {}

  async createGrade(createGradeDto: CreateGradeDto): Promise<IGrade> {
    const newGrade = await new this.gradeModel(createGradeDto);
    return newGrade.save();
  }


  async getGrade(gradeId: string): Promise<IGrade> {
    const existingGrade = await this.gradeModel.findById(gradeId).populate('teacher',['email','name','gender']).populate('student',['name','roleNo','class','gender','marks']);
    if (!existingGrade) {
      throw new NotFoundException(`Student #${gradeId} not found`);
    }
    return existingGrade;
  }


      //RelationShips

    async addTeacher(gradeId: string, teacherId: string): Promise<IGrade> {
      const addgrade = await this.gradeModel.findByIdAndUpdate(
        gradeId,
        { $addToSet: { teacher: teacherId }}, { new:true }
        ).populate('teacher');
        
      if (!addgrade) {
        throw new NotFoundException(`Error not found`);
      }
      return addgrade;
    }



    async addStudent(gradeId: string, studentId: string): Promise<IGrade> {
        const addstudent = await this.gradeModel.findByIdAndUpdate(
          gradeId,
          { $addToSet: { student: studentId }}, { new:true }
          ).populate('student');
          
        if (!addstudent) {
          throw new NotFoundException(`Error not found`);
        }
        return addstudent;
      }
}
