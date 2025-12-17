import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { HLEntity } from './hl-entity.entity';

@Entity('entities_types')
export class EntityType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => HLEntity, (entity) => entity.entityType)
    entities: HLEntity[];
}
