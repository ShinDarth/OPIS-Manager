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
    // convert format "1718" to format "2017/2018"
    year = `20${year.substr(0, 2)}/20${year.substr(2, 4)}`;

    return await this.evaluationRepository.find({
      where: {
        id_cds: course,
        anno_accademico: year,
      },
    });
  }

  async findByTeachingChannel(teaching: number, channel: string): Promise<Evaluation[]> {
    return await this.evaluationRepository.find({
      where: {
        id_insegnamento: teaching,
        canale: channel,
      },
    });
  }
}
