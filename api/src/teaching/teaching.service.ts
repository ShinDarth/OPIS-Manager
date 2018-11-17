import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Teaching } from './teaching.entity';

@Injectable()
export class TeachingService {
  constructor(
    @InjectRepository(Teaching)
    private readonly teachingRepository: Repository<Teaching>,
  ) {}

  async findOne(id: number): Promise<Teaching> {
    return await this.teachingRepository.findOne(id);
  }
}
