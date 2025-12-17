import { Column, JoinColumn, ManyToOne, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityType } from './entity-type.entity';
import { Language } from './language.entity';

@Entity('entities')
export class HLEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string


    @ManyToOne(() => EntityType, (entityType) => entityType.entities)
    @JoinColumn({ name: 'entities_type_id' })
    entityType: EntityType

    @Column({ name: 'creation_date', type: 'date', nullable: true })
    creationDate: string | null

    @ManyToOne(() => Language, (language) => language.originalEntities)
    @JoinColumn({ name: 'original_language_id' })
    originalLanguage: Language

    @ManyToOne(() => Language, (language) => language.translatedEntities, { nullable: true })
    @JoinColumn({ name: 'translation_language_id' })
    translationLanguage: Language | null
}
