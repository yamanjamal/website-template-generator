import { Request, Response, NextFunction } from 'express'

interface Fn {
  (req: Request, res: Response, next: NextFunction): Promise<void>
  (arg0: Request, arg1: Response, arg2: NextFunction): Promise<void>
}

const catchAsync =
  (fn: Fn) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err))
  }

export default catchAsync
