import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Teaching } from './teaching.entity';
import { TeachingService } from './teaching.service';
import { TeachingController } from './teaching.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teaching])],
  providers: [TeachingService],
  controllers: [TeachingController],
})
export class TeachingModule {}
