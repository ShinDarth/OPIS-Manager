import { Get, Controller } from '@nestjs/common';

import { DepartmentService } from './department.service';
import { Department } from './department.entity';

@Controller('dipartimento')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  root(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
}