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
import { GradeService } from '../service/grade.service';
import { CreateGradeDto } from '../dto/create-grade.dto';
import { ApiTags } from '@nestjs/swagger';
  
  @Controller('grade')
  @ApiTags('Grades')
  export class GradeController {
    constructor(private readonly gradeService: GradeService) {}
  
    @Post()
    async createGrade(
      @Res() response,
      @Body() createGradeDto: CreateGradeDto,
    ) {
      try {
        
        const newGrade = await this.gradeService.createGrade(
          createGradeDto,
        );
        return response.status(HttpStatus.CREATED).json({
          message: 'Grade has been created successfully',
          newGrade,
        });
      } catch (err) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: Grade not created!',
          error: 'Bad Request',
        });
      }
    }



    @Get('/:id')
    // @UseGuards(AuthGuard('jwt'))
    // @ApiBearerAuth()
    async getGrade(@Res() response, @Param('id') gradeId: string) {
      try {
        const existingGrade = await this.gradeService.getGrade(gradeId);
        return response.status(HttpStatus.OK).json({
          message: 'Grade found successfully',
          existingGrade,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }


    @Patch('/:id/add-teacher/:teacherId')
    async addTeacher(@Res() response, @Param('id') gradeId: string, @Param('teacherId') teacherId: string) {
      try {
        const add = await this.gradeService.addTeacher(gradeId, teacherId);
        return response.status(HttpStatus.OK).json({
        message: 'teacher added successfully',
        add
      });
    } catch(err){
        return response.status(err.status).json(err.response);
      }
      
    }



    @Patch('/:id/add-student/:studentId')
    async addStudent(@Res() response, @Param('id') gradeId: string, @Param('studentId') studentId: string) {
      try {
        const add = await this.gradeService.addStudent(gradeId, studentId);
        return response.status(HttpStatus.OK).json({
        message: 'student added successfully',
        add
      });
    } catch(err){
        return response.status(err.status).json(err.response);
      }
      
    }
  }
  