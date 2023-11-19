import mongoose, { Document, Schema } from 'mongoose'

interface FAQDocument extends Document {
  question: string
  answer: string
}

const faqSchema = new Schema<FAQDocument>({
  question: String,
  answer: String,
})

const FAQ = mongoose.model<FAQDocument>('FAQ', faqSchema)

export { FAQ, FAQDocument, faqSchema }
