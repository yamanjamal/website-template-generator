export interface WebsiteData {
  status: string
  sections: Sections
}

export interface Sections {
  _id: string
  image: string
  sentence: string
  description: string
  topics: Topic[]
  faqs: Faq[]
  __v: number
}

export interface Topic {
  image: string
  title: string
  description: string
  _id: string
  __v: number
}

export interface Faq {
  question: string
  answer: string
  _id: string
  __v: number
}
