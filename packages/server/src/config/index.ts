import joi from 'joi'

// eslint-disable-next-line import/no-commonjs
require('dotenv').config()

const DataSourceConfig = () => {
  const Schema = joi.object().keys({
    DATASOURCE_USER: joi.string().required(),
    DATASOURCE_PASSWORD: joi.string().required(),
    DATASOURCE_URL: joi.string().required(),
    DATASOURCE_PORT: joi.number().positive().required(),
    DATASOURCE_NAME: joi.string().required()
  })

  const { value: Config, error: DataSourceConfigError } = Schema.prefs({
    errors: { label: 'key' }
  }).validate({
    DATASOURCE_USER: process.env.DATASOURCE_USER,
    DATASOURCE_PASSWORD: process.env.DATASOURCE_PASSWORD,
    DATASOURCE_NAME: process.env.DATASOURCE_NAME,
    DATASOURCE_URL: process.env.DATASOURCE_URL,
    DATASOURCE_PORT: process.env.DATASOURCE_PORT
  })

  if (DataSourceConfigError && process.env.NODE_ENV !== 'test') {
    throw new Error(`DataSourceConfigError: ${DataSourceConfigError.message}`)
  }

  return Config
}

const BackendServiceConfig = () => {
  const Schema = joi.object().keys({
    NODE_ENV: joi.string().valid('production', 'development', 'local', 'test').default('local'),
    PORT: joi.number().positive().default(4000).description('Service Port')
  })

  const { value: Config, error: BackendServiceConfigError } = Schema.prefs({
    errors: { label: 'key' }
  }).validate({
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
  })

  if (BackendServiceConfigError && process.env.NODE_ENV !== 'test') {
    throw new Error(`BackendServiceConfigError: ${BackendServiceConfigError.message}`)
  }

  return Config
}

export { BackendServiceConfig, DataSourceConfig }
