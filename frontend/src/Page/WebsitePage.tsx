import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import TopicSection from '../components/TopicSection'
import FAQSection from '../components/FAQSection'
import { _WebsiteService } from '../services/website/website.query.service'

export default function WebsitePage() {
  const { data, isLoading } = _WebsiteService.getWebsiteSections().useQuery()

  if (isLoading) return <p>loading</p>
  return (
    <>
      <HeroSection sentence={data?.data.sections.sentence} />
      <IntroSection description={data?.data.sections.description} />
      <TopicSection topics={data?.data.sections.topics} />
      <FAQSection faqs={data?.data.sections.faqs} />
    </>
  )
}
