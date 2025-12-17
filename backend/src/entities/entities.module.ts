import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HLEntity } from './entities/hl-entity.entity';
import { EntityType } from './entities/entity-type.entity';
import { Language } from './entities/language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    HLEntity,
    Language,
    EntityType,
  ])
  ],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule { }
