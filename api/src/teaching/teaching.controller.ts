import { Get, Controller, Param } from '@nestjs/common';

import { TeachingService } from './teaching.service';
import { Teaching } from './teaching.entity';

@Controller('insegnamento')
export class TeachingController {
  constructor(private readonly teachingService: TeachingService) {}

  @Get(':id')
  findOne(@Param('id') id): Promise<Teaching> {
    return this.teachingService.findOne(id);
  }
}
