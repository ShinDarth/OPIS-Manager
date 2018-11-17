import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Evaluation } from './evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  async findByCourseYear(course: number, year: string): Promise<Evaluation[]> {
    // TODO
    return await this.evaluationRepository.find({ where: { anno_accademico: year } });
  }
}
