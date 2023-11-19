import mongoose, { Document, Schema } from 'mongoose'

interface TopicDocument extends Document {
  image: string
  title: string
  description: string
}

const topicSchema = new Schema<TopicDocument>({
  image: String,
  title: String,
  description: String,
})

const Topic = mongoose.model<TopicDocument>('Topic', topicSchema)

export { Topic, TopicDocument, topicSchema }
