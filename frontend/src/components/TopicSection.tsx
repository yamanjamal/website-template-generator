import { Topic } from '../services/website/website.types'

interface Props {
  topics?: Topic[]
}

export default function TopicSection({ topics }: Props) {
  if (!topics)
    return (
      <p className="text-5xl mx-auto text-center my-48">
        there is no data for this section
      </p>
    )
  return (
    <div className="container my-24 mx-auto md:px-6" id="topic-section">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">Topics</h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {topics.map((topic, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div
                    className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src={`https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp`}
                      className="w-full"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">{topic.title}</h5>
                  <p className="mb-6">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
