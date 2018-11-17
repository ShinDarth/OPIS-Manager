import { Get, Controller } from '@nestjs/common';

import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('cds')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  root(): Promise<Course[]> {
    return this.courseService.findAll();
  }
}
