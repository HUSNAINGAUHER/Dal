import { Request, Response } from 'express'

export const ErrorResponse = async (req: Request, res: Response) => {
  let error = res.locals.error
  if (error?.request) {
    const response = error?.response?.data
    error = {
      status: response?.code || 500,
      name: response?.level,
      message: response?.message || 'Invalid response',
      stack: {}
    }
  }

  if (!error) {
    error = {
      status: 404,
      message: `${req.path} not found`,
      level: 'API Level Error'
    }
  }

  try {
    const response = {
      code: error.statusCode,
      level: error.name,
      message: error.message,
      details: error.details
    }

    res.status(response.code ? response.code : 500).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
}
