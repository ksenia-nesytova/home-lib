import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HLEntity } from './entities/hl-entity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntitiesService {

  constructor(
    @InjectRepository(HLEntity)
    private readonly entityRepository: Repository<HLEntity>,
  ) { }

  create(createEntityDto: CreateEntityDto) {
    return 'This action adds a new entity';
  }

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
