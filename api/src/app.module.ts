import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartmentModule } from './department/department.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DepartmentModule],
})
export class AppModule {}
