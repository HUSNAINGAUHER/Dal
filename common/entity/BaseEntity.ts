import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity()
export class BaseEntity {
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date

  @DeleteDateColumn({ type: 'timestamptz', default: null, nullable: true })
  deletedAt?: Date | null
}
