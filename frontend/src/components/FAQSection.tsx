import { Faq } from '../services/website/website.types'
import { useState } from 'react'

interface Props {
  faqs?: Faq[]
}

export default function FAQSection({ faqs }: Props) {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index))
    } else {
      setExpandedItems([...expandedItems, index])
    }
  }

  if (!faqs)
    return (
      <p className="text-5xl mx-auto text-center my-48">
        there is no data for this section
      </p>
    )
  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24" id="faq-section">
      <section className="mb-32">
        <h2 className="mb-6 pl-6 text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <div id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <div
              className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200"
              key={index}
            >
              <h2 className="mb-0" id={`flush-heading-${index}`}>
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  data-te-collapse-init
                  data-te-target={`#flush-collapse-${index}`}
                  aria-expanded={expandedItems.includes(index)}
                  aria-controls={`flush-collapse-${index}`}
                  onClick={() => toggleItem(index)}
                >
                  {faq.question}
                  <span
                    className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out ${
                      expandedItems.includes(index)
                        ? 'rotate-[-180deg] text-primary motion-reduce:transition-none dark:fill-[#8FAEE0]'
                        : 'rotate-0 text-primary-400 dark:fill-[#eee]'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id={`flush-collapse-${index}`}
                className={`${
                  expandedItems.includes(index) ? '' : 'hidden'
                } border-0`}
                data-te-collapse-item
                data-te-collapse-show={expandedItems.includes(index)}
                aria-labelledby={`flush-heading-${index}`}
                data-te-parent="#accordionFlushExample"
              >
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
