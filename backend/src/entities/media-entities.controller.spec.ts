import { Test, TestingModule } from '@nestjs/testing';
import { MediaEntitiesController } from './media-entities.controller';
import { MediaEntitiesService } from './media-entities.service';

describe('MediaEntitiesController', () => {
  let controller: MediaEntitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaEntitiesController],
      providers: [MediaEntitiesService],
    }).compile();

    controller = module.get<MediaEntitiesController>(MediaEntitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
