import { Get, Controller } from '@nestjs/common';

import { EvaluationService } from './evaluation.service';
import { Evaluation } from './evaluation.entity';

@Controller('schede')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  root(): Promise<Evaluation[]> {
    return this.evaluationService.findAll();
  }
}