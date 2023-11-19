import { Section } from '../models/SectionModel.ts'
import catchAsync from '../utils/catchAsync.ts'
import { Request, Response } from 'express'

const index = catchAsync(async (req: Request, res: Response) => {
  const sections = await Section.findOne()

  res.status(200).json({
    status: 'success',
    sections,
  })
})

export default { index }
