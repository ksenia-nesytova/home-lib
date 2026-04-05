import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MediaEntity } from './entities/media-entity.entity';
import { DataSource, Like, Repository } from 'typeorm';
import { SearchMediaEntityDto } from './dto/search-media-entity.dto';

@Injectable()
export class MediaEntitiesService {

  constructor(
    @InjectRepository(MediaEntity)
    private readonly mediaEntityRepository: Repository<MediaEntity>,
  ) { }

  async findAll({ query, page, limit, tags }: SearchMediaEntityDto) {

    const queryBuilder = this.mediaEntityRepository
      .createQueryBuilder('media_entity')
      // .leftJoin('media_entity.tags', 'tag')
      .leftJoin('media_entity.mediaType', 'mediaType');

    if (query) {
      queryBuilder.where('media_entity.title ILIKE :query OR media_entity.description LIKE :query', { query: `%${query}%` });
    }

    if (tags && tags.length > 0) {
      queryBuilder
        .andWhere('tag.name IN (:...tags)', { tags })
        .groupBy('media_entity.id')
        .having('COUNT(DISTINCT tag.id) = :tagCount', { tagCount: tags.length });
    }

    queryBuilder.skip((page - 1) * limit).take(limit);

    const [data, total] = await Promise.all([
      queryBuilder.getMany(),
      queryBuilder.clone().getCount(),
    ]);

    return { data, total, page, limit };
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  create(createEntityDto: CreateEntityDto) {
    return 'This action adds a new entity';
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
