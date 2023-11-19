import Logging from '../library/logging.ts'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function getWebsiteSections(
  name: string,
  description: string,
  target_user: string
) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' },
      max_tokens: 2048,
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant designed to send article content for a website based on the content provided by the user and output JSON.',
        },
        {
          role: 'user',
          content: `Website Name: ${name}\nWebsite Description: ${description}\nTarget User:${target_user}\n\n  
          give me an image and a sentance and a description 
          give me a list of 3 topics each topic contains an image title description  topics
          give me a 3 of the most asked questions about ${name} and answeres faqs
          `,
        },
      ],
    })
    return JSON.parse(completion.choices[0].message.content)
  } catch (error) {
    return Logging.error(
      error.response ? error.response.data : 'There was an issue on the server'
    )
  }
}
