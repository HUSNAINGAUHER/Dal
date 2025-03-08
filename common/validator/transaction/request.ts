import { Transaction } from '@dal/common/entity'
import { IsOptional, IsNumber, IsNotEmpty, IsPositive, IsEnum, IsDate } from 'class-validator'
import { TransactionType } from '@dal/common/entity/Transaction'
import { Transform } from 'class-transformer'

export class CreateNewTransactionValidationSchema implements Transaction {
  @IsOptional()
  ID!: string

  @IsPositive()
  @IsNumber({}, { message: 'amount must be a valid number' })
  @Transform((value) => parseInt(value.value))
  @IsNotEmpty({ message: 'amount is required' })
  amount: number

  @IsDate()
  @Transform((value) => new Date(value.value))
  @IsNotEmpty({ message: 'timestamp is required' })
  timestamp: Date

  @IsNotEmpty({ message: 'transaction type is required' })
  @IsEnum(TransactionType, { message: 'transaction type must be either credit or debit' })
  type: TransactionType
}
