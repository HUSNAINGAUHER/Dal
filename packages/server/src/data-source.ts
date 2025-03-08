import { Transaction } from '@dal/common/entity'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { DataSourceConfig } from '@/config'

const {
  DATASOURCE_URL,
  DATASOURCE_PORT,
  DATASOURCE_USER,
  DATASOURCE_PASSWORD,
  DATASOURCE_NAME
} = DataSourceConfig()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DATASOURCE_URL,
  port: DATASOURCE_PORT,
  username: DATASOURCE_USER,
  password: DATASOURCE_PASSWORD,
  database: DATASOURCE_NAME,
  synchronize:true,
  logging: true,
  ssl : process.env.SSL_CERTIFICATE ?{
    rejectUnauthorized: true,
    ca: process.env.SSL_CERTIFICATE,
  } : false,
  entities: [Transaction],
  migrations: []
})

