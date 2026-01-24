import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MediaEntity } from './media-entity.entity';
import { BookDetails } from './book-details.entity';

@Entity('languages')
export class Language {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @OneToMany(() => BookDetails, (entity) => entity.originalLanguage)
    originalEntities: MediaEntity[];

    @OneToMany(() => BookDetails, (entity) => entity.translationLanguage)
    translatedEntities: MediaEntity[];
}
