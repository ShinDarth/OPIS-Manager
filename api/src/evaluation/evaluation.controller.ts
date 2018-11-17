import { Get, Controller, Req, Query } from '@nestjs/common';

import { EvaluationService } from './evaluation.service';
import { Evaluation } from './evaluation.entity';

@Controller('schede')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  root(@Query('cds') course: number, @Query('anno_accademico') year): Promise<Evaluation[]> {

    // don't stress the database if the query parameters are missing
    if (!course || !year) {
      return;
    }

    return this.evaluationService.findByCourseYear(course, year);
  }
}