import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DepartmentModule,
    CourseModule,
    EvaluationModule,
  ],
})
export class AppModule {}
