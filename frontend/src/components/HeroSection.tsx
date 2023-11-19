import Navbar from './Navbar'

interface Props {
  sentence?: string
}
export default function HeroSection({ sentence }: Props) {
  if (!sentence)
    return (
      <p className="text-5xl mx-auto text-center my-48">
        there is no data for this section
      </p>
    )
  return (
    <section className="mb-40" id="hero-section">
      <Navbar />
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: '50%',
          height: '500px',
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                {sentence}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
