import mongoose, { Document, Schema } from 'mongoose'
import { TopicDocument, topicSchema } from './TopicModel.ts'
import { FAQDocument, faqSchema } from './FaqModel.ts'

interface SectionDocument extends Document {
  image: string
  sentence: string
  description: string
  topics: TopicDocument[]
  faqs: FAQDocument[]
}

const sectionSchema = new Schema<SectionDocument>({
  image: String,
  sentence: String,
  description: String,
  topics: [topicSchema],
  faqs: [faqSchema],
})

const Section = mongoose.model<SectionDocument>('Section', sectionSchema)

export { Section }
