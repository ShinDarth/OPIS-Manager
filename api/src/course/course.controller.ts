import { Get, Controller, Param } from '@nestjs/common';

import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('cds')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get(':id')
  findByDepartment(@Param('id') id): Promise<Course[]> {
    return this.courseService.findByDepartment(id);
  }
}
