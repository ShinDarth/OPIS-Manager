import { Get, Controller, Req, Query } from '@nestjs/common';

import { EvaluationService } from './evaluation.service';
import { Evaluation } from './evaluation.entity';

@Controller('schede')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  root(@Query('cds') course: number, @Query('anno_accademico') year): Promise<Evaluation[]> {

    if (!course || !year) {
      return;
    }
    return this.evaluationService.findByCourseYear(course, year);
  }

  @Get('insegnamento')
  findByTeachingChannel(@Query('id_ins') teaching: number, @Query('canale') channel): Promise<Evaluation[]> {
    if (!teaching || !channel) {
      return;
    }

    return this.evaluationService.findByTeachingChannel(teaching, channel);
  }
}