import { AppDataSource } from '@/data-source'
import { Router, static as Static, json, urlencoded } from 'express'
import cors from 'cors'

import { ErrorResponse } from '@dal/common/middleware/ErrorResponse'

import { TransactionRouter } from "@/api"

const App = async (app: any) => {
  await AppDataSource.initialize()

  app.use(cors())
  
  app.use(json({ limit: '5mb' }))
  app.use(urlencoded({ extended: true, limit: '5mb' }))
  app.use(Static(`${__dirname}/public`))

  const ApiRouter = Router()

  app.use('/api', ApiRouter)

  ApiRouter.use('/transactions', TransactionRouter)
  ApiRouter.use(ErrorResponse)
}

export default App
