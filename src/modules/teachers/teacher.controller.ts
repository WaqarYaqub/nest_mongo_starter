/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Patch,
    Post,
    Res,
  } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create.teacher.dto';
import { ApiTags } from '@nestjs/swagger';
  
  @Controller('teacher')
  @ApiTags('Teachers')
  export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}
  
    @Get()
    async getStudents(@Res() response) {
      try {
        const teachers = await this.teacherService.getAll();
        return response.status(HttpStatus.OK).json({
          message: 'All teachers found successfully',
          teachers,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }

    @Post()
    async createTeacher(
      @Res() response,
      @Body() createTeacherDto: CreateTeacherDto,
    ) {
      try {
        const newTeacher = await this.teacherService.createTeacher(
          createTeacherDto,
        );
        return response.status(HttpStatus.CREATED).json({
          message: 'Teacher has been created successfully',
          newTeacher,
        });
      } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Teacher not created!',
          error: 'Bad Request',
        });
      }
    }


    @Get('/:id')
    // @UseGuards(AuthGuard('jwt'))
    // @ApiBearerAuth()
    async getTeacher(@Res() response, @Param('id') teacherId: string) {
      try {
        const existingTeacher = await this.teacherService.getTeacher(teacherId);
        return response.status(HttpStatus.OK).json({
          message: 'Teacher found successfully',
          existingTeacher,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }



      //Relationships

  @Patch('/:id/add-grade/:gradeId')
  async addGrade(@Res() response, @Param('id') teacherId: string, @Param('gradeId') gradeId: string) {
    try {
      const add = await this.teacherService.addGrade(teacherId, gradeId);
      return response.status(HttpStatus.OK).json({
      message: 'grade added successfully',
      add
    });
  } catch(err){
      return response.status(err.status).json(err.response);
    }
  }



  @Patch('/:id/add-student/:studentId')
  async addStudent(@Res() response, @Param('id') teacherId: string, @Param('studentId') studentId: string) {
    try {
      const add = await this.teacherService.addStudent(teacherId, studentId);
      return response.status(HttpStatus.OK).json({
      message: 'student added successfully',
      add
    });
  } catch(err){
      return response.status(err.status).json(err.response);
    }
  }
  }
  