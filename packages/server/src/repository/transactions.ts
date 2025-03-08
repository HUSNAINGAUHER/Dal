import { AppDataSource } from '@/data-source'
import { Transaction } from '@dal/common/entity'
import { Repository } from 'typeorm'
import { APIError, STATUS_CODES } from '@dal/common/utils/appErrors'

export class TransactionRepository {
  private repo: Repository<Transaction>

  constructor() {
    this.repo = AppDataSource.getRepository(Transaction)
  }

  async AddTransaction(transaction: Transaction): Promise<Transaction> {
    try {
      const result = await this.repo
        .createQueryBuilder()
        .insert()
        .values(transaction)
        .returning('*')
        .execute()

      return result.raw[0]
    } catch (err) {
      throw new APIError('DBLevelError', STATUS_CODES.BAD_REQUEST, err.message)
    }
  }

  async ListTransactions(): Promise<Transaction[]> {
    return await this.repo.find({ order: { timestamp: 'DESC' } })
  }

  async GetTransaction(ID: string): Promise<Transaction> {
    try {
      const result = await this.repo.findOne({ where: { ID } })

      if (!result) {
        throw new APIError(
          'DBLevelError',
          STATUS_CODES.BAD_REQUEST,
          'Transaction cannot be found with ID'
        )
      }

      return result
    } catch (err) {
      throw new APIError('DBLevelError', STATUS_CODES.BAD_REQUEST, err.message)
    }
  }
}
