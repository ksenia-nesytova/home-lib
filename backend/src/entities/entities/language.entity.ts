import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { HLEntity } from './hl-entity.entity';

@Entity('languages')
export class Language {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @OneToMany(() => HLEntity, (entity) => entity.originalLanguage)
    originalEntities: HLEntity[];

    @OneToMany(() => HLEntity, (entity) => entity.translationLanguage)
    translatedEntities: HLEntity[];
}
