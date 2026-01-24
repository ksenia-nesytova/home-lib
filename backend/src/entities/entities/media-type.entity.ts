import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { HLEntity } from './hl-entity.entity';

@Entity('media_types')
export class MediaType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => HLEntity, (entity) => entity.mediaType)
    media_entities: HLEntity[];
}
