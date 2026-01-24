import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MediaEntity } from './media-entity.entity';

@Entity('media_types')
export class MediaType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => MediaEntity, (entity) => entity.mediaType)
    media_entities: MediaEntity[];
}
