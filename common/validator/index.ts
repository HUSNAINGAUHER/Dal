import { validateOrReject } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { plainToClass } from 'class-transformer'

export const Validator = <T extends new () => any>(ValidationSchema: T) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body) {
        res.status(400).send({ message: 'Missing request body!' })
        return
      }
      const validationInstance = new ValidationSchema()
      Object.assign(validationInstance, plainToClass(ValidationSchema, req.body))

      console.log(validationInstance)
      await validateOrReject(validationInstance)
      next()
    } catch (e: any) {
      const message = Array.isArray(e) ? Object.values(e[0].constraints)[0] : 'Validation failed'
      res.status(400).send({ message })
    }
  }
}
