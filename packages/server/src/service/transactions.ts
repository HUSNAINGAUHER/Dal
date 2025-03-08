import { Transaction } from '@dal/common/entity'
import { TransactionRepository } from '@/repository'

export class TransactionService {
  private repo: TransactionRepository

  constructor() {
    this.repo = new TransactionRepository()
  }

  async AddTransaction(transaction: Transaction): Promise<Transaction> {
    return await this.repo.AddTransaction(transaction)
  }

  async ListTransactions(): Promise<Transaction[]> {
    return await this.repo.ListTransactions()
  }

  async GetTransaction(ID: string): Promise<Transaction> {
    return await this.repo.GetTransaction(ID)
  }
}
