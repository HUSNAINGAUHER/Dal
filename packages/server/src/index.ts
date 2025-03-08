import express from 'express'
import expressApp from './app'

import { BackendServiceConfig } from '@/config'

const { PORT } = BackendServiceConfig()

const StartServer = async () => {
  const app = express()
  await expressApp(app)

  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
  })
}
//

try {
  StartServer()
} catch (e) {
  console.log(e)
}
