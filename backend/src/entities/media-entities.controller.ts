import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MediaEntitiesService } from './media-entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { SearchMediaEntityDto } from './dto/search-media-entity.dto';

@Controller('media_entities')
export class MediaEntitiesController {
  constructor(private readonly mediaEntitiesService: MediaEntitiesService) { }

  @Post()
  create(@Body() createEntityDto: CreateEntityDto) {
    return this.mediaEntitiesService.create(createEntityDto);
  }

  @Get()
  findAll(
    @Query() searchMediaEntityDto: SearchMediaEntityDto
  ) {
    return this.mediaEntitiesService.findAll(searchMediaEntityDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaEntitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityDto: UpdateEntityDto) {
    return this.mediaEntitiesService.update(+id, updateEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaEntitiesService.remove(+id);
  }
}
