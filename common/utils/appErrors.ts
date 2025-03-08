
export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_ALLOWED: 405,
  UN_AUTHORISED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  INVALID: 422,
  UN_AUTHENTICATED: 401,
  ALREADY_LOGGED_IN: 406,
  CONFLICT: 409,
  EXTERNAL_SERVICE_ERROR: 503
}

export class AppError extends Error {
  public name: string

  public statusCode: any

  public description?: string | undefined

  public isOperational?: any

  public errorStack?: any

  public requestID: string

  public logError?: any

  public details?: any

  constructor(
    name: string,
    statusCode: any,
    description: string | undefined,
    isOperational: any,
    errorObj: any
  ) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.statusCode = statusCode
    this.isOperational = isOperational
    this.details = errorObj
  }
}

//api Specific Errors
export class APIError extends AppError {
  constructor(
    name: string,
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = 'Internal Server Error',
    errorObj = {},
    isOperational = true
  ) {
    super(name, statusCode, description, isOperational, errorObj)
  }
}
