import { Request, Response } from 'express'
import mongoose from 'mongoose'
import getWebsiteSections from '../services/openAiService.ts'
import catchAsync from '../utils/catchAsync.ts'
import { Section } from '../models/SectionModel.ts'
import { Topic } from '../models/TopicModel.ts'
import { FAQ } from '../models/FaqModel.ts'

const store = catchAsync(async (req: Request, res: Response) => {
  const { name, description, target_user } = req.body
  const sectionData = await getWebsiteSections(name, description, target_user)
  console.log(sectionData)

  mongoose.connection.dropDatabase()

  const topics = await Promise.all(
    sectionData.topics.map(async (topicData) => {
      const topic = new Topic(topicData)
      return await topic.save()
    })
  )

  const faqs = await Promise.all(
    sectionData.faqs.map(async (faqData) => {
      const faq = new FAQ(faqData)
      return faq.save()
    })
  )

  const section = new Section({
    image: sectionData.image,
    sentence: sectionData.sentence,
    description: sectionData.description,
    topics: topics.map((topic) => topic),
    faqs: faqs.map((faq) => faq),
  })

  await section.save()

  res.status(201).json({
    status: 'success',
    data: {
      section,
    },
  })
})

export default { store }
