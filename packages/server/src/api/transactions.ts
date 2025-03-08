import { Router } from 'express'
import { CreateNewTransactionValidationSchema } from '@dal/common/validator/transaction'
import { Validator } from '@dal/common/validator'
import { TransactionService } from '@/service'
export { TransactionService } from '@/service'

export const TransactionRouter = Router()

const service = new TransactionService()

//################################ Add Transaction ########################################
TransactionRouter.post(
  '/',
  Validator(CreateNewTransactionValidationSchema),
  async (req, res, next) => {
    try {
      const transaction = req.body
      const result = await service.AddTransaction(transaction)
      res.json(result)
    } catch (err) {
      res.locals.error = err
      next()
    }
  }
)

//################################ List Transactions ########################################
TransactionRouter.get('/', async (req, res, next) => {
  try {
    const transactions = await service.ListTransactions()
    res.json(transactions)
  } catch (err) {
    res.locals.error = err
    next()
  }
})

//################################ Get Transaction ########################################
TransactionRouter.get('/:ID', async (req, res, next) => {
  try {
    const { ID } = req.params
    if (!ID || !require('uuid').validate(ID)) {
      res.status(400).json({ message: 'Invalid transaction ID format' })
      return
    }

    const transaction = await service.GetTransaction(ID)
    res.json(transaction)
  } catch (err) {
    res.locals.error = err
    next()
  }
})
