import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit'
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  ID: string

  @Column('float8')
  amount: number

  @Column('enum', { enum: TransactionType, enumName: 'transaction_type' })
  type: TransactionType

  @Column('timestamp')
  timestamp: Date
}
