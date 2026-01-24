import { Test, TestingModule } from '@nestjs/testing';
import { MediaEntitiesService } from './media-entities.service';

describe('MediaEntitiesService', () => {
  let service: MediaEntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaEntitiesService],
    }).compile();

    service = module.get<MediaEntitiesService>(MediaEntitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
