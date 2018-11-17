import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { TeachingModule } from './teaching/teaching.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DepartmentModule,
    CourseModule,
    EvaluationModule,
    TeachingModule,
  ],
})
export class AppModule {}
