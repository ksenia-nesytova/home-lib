import { Entity, Column, JoinColumn, ManyToOne, ChildEntity, PrimaryColumn, OneToOne } from 'typeorm';
import { Language } from './language.entity';
import { MediaEntity } from './media-entity.entity';

@Entity('book_details')
export class BookDetails {
    @PrimaryColumn('uuid')
    entitiesId: string;

    // @OneToOne(() => MediaEntity, (entity) => entity.bookDetails)
    // @JoinColumn({ name: 'entities_id' })
    // entity: MediaEntity;

    @Column()
    author: string;

    @Column({ name: 'publisher', nullable: true })
    publisher: string | null;

    @Column({ name: 'publication_date', type: 'date', nullable: true })
    publicationDate: string | null;

    @Column({ nullable: true })
    edition: string | null;

    @ManyToOne(() => Language, (language) => language.originalEntities, { nullable: true })
    @JoinColumn({ name: 'original_language_id' })
    originalLanguage: Language | null

    @ManyToOne(() => Language, (language) => language.translatedEntities, { nullable: true })
    @JoinColumn({ name: 'translation_language_id' })
    translationLanguage: Language | null

}