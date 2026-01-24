import { Module } from '@nestjs/common';
import { MediaEntitiesService } from './media-entities.service';
import { MediaEntitiesController } from './media-entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HLEntity } from './entities/hl-entity.entity';
import { MediaType } from './entities/media-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    HLEntity,
    MediaType,
  ])
  ],
  controllers: [MediaEntitiesController],
  providers: [MediaEntitiesService],
})
export class MediaEntitiesModule { }
