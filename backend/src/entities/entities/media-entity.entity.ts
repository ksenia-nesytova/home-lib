import { Column, JoinColumn, ManyToOne, Entity, PrimaryGeneratedColumn, OneToOne, } from 'typeorm';
import { MediaType } from './media-type.entity';
import { BookDetails } from './book-details.entity';
import { Min, Max } from 'class-validator';

@Entity('media_entities')
export class MediaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string;

    @Column()
    author: string;

    @ManyToOne(() => MediaType, (mediaType) => mediaType.media_entities)
    @JoinColumn({ name: 'media_type_id' })
    mediaType: MediaType;

    @Column({ name: 'creation_date', type: 'date', nullable: true })
    creationDate: string | null;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string | null;

    @Column({ name: 'notes', type: 'text', nullable: true })
    notes: string | null;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
