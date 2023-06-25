import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { TeacherModule } from './modules/teachers/teacher.module';
import { TeacherSchema } from './modules/teachers/schema/teacher.schema';
import { GradeModule } from './modules/grades/grade.module';
import { StudentSchema } from './modules/students/student.schema';
import { StudentModule } from './modules/students/student.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    StudentModule,
    GradeModule,
    TeacherModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      // signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forRoot('mongodb+srv://test_password:test_password@cluster0.xxv8407.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
