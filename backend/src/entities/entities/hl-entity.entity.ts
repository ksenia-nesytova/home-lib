import { Column, JoinColumn, ManyToOne, Entity, PrimaryGeneratedColumn, OneToOne, } from 'typeorm';
import { EntityType } from './entity-type.entity';
import { BookDetails } from './book-details.entity';

@Entity('entities')
export class HLEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string;

    @ManyToOne(() => EntityType, (entityType) => entityType.entities)
    @JoinColumn({ name: 'entities_type_id' })
    entityType: EntityType;

    @Column({ name: 'creation_date', type: 'date', nullable: true })
    creationDate: string | null;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string | null;

    @Column({ name: 'notes', type: 'text', nullable: true })
    notes: string | null;

    @Column({ name: 'rating', type: 'int', nullable: true })
    rating: number | null;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToOne(() => BookDetails, (details) => details.entity)
    bookDetails?: BookDetails;
}
