import { Module } from '@nestjs/common';
import { MediaEntitiesService } from './media-entities.service';
import { MediaEntitiesController } from './media-entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaEntity } from './entities/media-entity.entity';
import { MediaType } from './entities/media-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    MediaEntity,
    MediaType,
  ])
  ],
  controllers: [MediaEntitiesController],
  providers: [MediaEntitiesService],
})
export class MediaEntitiesModule { }
